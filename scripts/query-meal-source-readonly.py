#!/usr/bin/env python3
"""Read verified recipe SQL through an explicitly configured SSH source.

The private JSON file named by MOHEMEOKJI_RECIPE_SOURCE_CONFIG contains
host, sshUser, container, database and role, never passwords or connection URIs.
Usage: query-meal-source-readonly.py SQL_FILE key=value ...
"""

from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path
import re
import shlex
import subprocess
import sys


SCRIPTS = Path(__file__).resolve().parent
MAX_ROWS = 5000
SQL_HASHES = {
    'export-meal-recipes.sql': '904e54109e1f2b50a2a475cf12c91558c3f95852fb6b7114fa5b1c8ca64c0f46',
    'find-store-recipe-candidates.sql': '540bc6141c380d097c9126fb838aa18ad0ab2e7ef8f3bf824878fc37f3020d82',
    'export-store-recipe-candidates.sql': '5b6e3c1e8123b77bf0fa95404ea244d65aecfd7b21aabbfce307eb58bf44c3ff',
}
CONFIG_PATTERNS = {
    'host': r'[A-Za-z0-9](?:[A-Za-z0-9.-]{0,251}[A-Za-z0-9])?',
    'sshUser': r'[A-Za-z_][A-Za-z0-9_-]{0,63}',
    'container': r'[A-Za-z0-9][A-Za-z0-9_.-]{0,127}',
    'database': r'[A-Za-z0-9_][A-Za-z0-9_]{0,62}',
    'role': r'[A-Za-z0-9_][A-Za-z0-9_]{0,62}',
}


def validate_config(value: object) -> dict[str, str]:
    if not isinstance(value, dict) or set(value) != set(CONFIG_PATTERNS):
        raise ValueError('Source config requires only host, sshUser, container, database and role.')
    for key, pattern in CONFIG_PATTERNS.items():
        if not isinstance(value[key], str) or not re.fullmatch(pattern, value[key]):
            raise ValueError('Source config has an invalid ' + key + '.')
    return value


def load_config() -> dict[str, str]:
    name = os.environ.get('MOHEMEOKJI_RECIPE_SOURCE_CONFIG')
    if not name:
        raise ValueError('MOHEMEOKJI_RECIPE_SOURCE_CONFIG must name a private JSON file.')
    path = Path(name).resolve(strict=True)
    if not path.is_file() or path.stat().st_size > 65536:
        raise ValueError('Source config must be a JSON file no larger than 64 KiB.')
    return validate_config(json.loads(path.read_text()))


def validate_ids(ids: object) -> None:
    if not isinstance(ids, list) or not ids or len(ids) > MAX_ROWS:
        raise ValueError('Recipe IDs must be a nonempty list of at most 5000 IDs.')
    if any(not isinstance(value, str) or not re.fullmatch(r'[0-9]{1,20}', value) for value in ids):
        raise ValueError('Recipe IDs must be decimal strings.')
    if len(set(ids)) != len(ids):
        raise ValueError('Recipe IDs must be unique.')


def validated_request(argv: list[str]) -> tuple[str, dict[str, str]]:
    if not argv:
        raise ValueError('Usage: query-meal-source-readonly.py SQL_FILE key=value ...')
    path = Path(argv[0]).resolve(strict=True)
    if path.parent != SCRIPTS or path.name not in SQL_HASHES:
        raise ValueError('SQL path is not in the verified meal read allowlist.')
    data = path.read_bytes()
    if hashlib.sha256(data).hexdigest() != SQL_HASHES[path.name]:
        raise ValueError('SQL changed since verification; review and update its pinned hash.')
    variables: dict[str, str] = {}
    for argument in argv[1:]:
        key, separator, value = argument.partition('=')
        if not separator or key in variables:
            raise ValueError('Each variable must be supplied once as key=value.')
        variables[key] = value
    if path.name == 'find-store-recipe-candidates.sql':
        if set(variables) != {'search_spec_json', 'tenant', 'candidate_limit'}:
            raise ValueError('Discovery requires search_spec_json, tenant and candidate_limit.')
        specs = json.loads(variables['search_spec_json'])
        limit_text = variables['candidate_limit']
        if not re.fullmatch(r'[0-9]{1,3}', limit_text) or not 1 <= int(limit_text) <= 500:
            raise ValueError('candidate_limit must be an integer from 1 to 500.')
        if not isinstance(specs, list) or not specs or len(specs) * int(limit_text) > MAX_ROWS:
            raise ValueError('Discovery spec count times candidate_limit must be between 1 and 5000.')
        for spec in specs:
            if not isinstance(spec, dict):
                raise ValueError('Each discovery spec must be an object.')
            for key in ('ingredientLabels', 'titleTerms'):
                labels = spec.get(key)
                if not isinstance(labels, list) or not 1 <= len(labels) <= 64:
                    raise ValueError('Each discovery label list must contain 1 to 64 strings.')
                if any(not isinstance(label, str) or not label or len(label) > 200 for label in labels):
                    raise ValueError('Discovery labels must contain at most 200 characters.')
    elif path.name == 'export-store-recipe-candidates.sql':
        if set(variables) != {'recipe_ids_json', 'tenant'}:
            raise ValueError('Candidate export requires recipe_ids_json and tenant.')
        validate_ids(json.loads(variables['recipe_ids_json']))
    else:
        if set(variables) != {'recipe_ids'}:
            raise ValueError('Approved recipe export requires recipe_ids only.')
        validate_ids(variables['recipe_ids'].split(','))
    if 'tenant' in variables and variables['tenant'] != 'recipe-full':
        raise ValueError('Meal source reads are restricted to the recipe-full tenant.')
    return data.decode('utf-8'), variables


def query(argv: list[str]) -> list[dict]:
    sql, variables = validated_request(argv)
    config = load_config()
    command = [
        'docker', 'exec', '-i', '-e', 'PGOPTIONS=-c default_transaction_read_only=on',
        config['container'], 'psql', '-X', '-qAt', '-w',
        '-U', config['role'], '-d', config['database'], '-v', 'ON_ERROR_STOP=1',
    ]
    for key, value in variables.items():
        command.extend(['-v', key + '=' + value])
    result = subprocess.run(
        ['ssh', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=10',
         config['sshUser'] + '@' + config['host'], shlex.join(command)],
        input=sql, text=True, capture_output=True, timeout=60, check=False,
    )
    if result.returncode:
        raise ValueError('Recipe source read failed: ' + result.stderr.strip())
    lines = [line for line in result.stdout.splitlines() if line.strip()]
    if len(lines) > MAX_ROWS:
        raise ValueError('Recipe source read exceeded the 5000-row query bound.')
    rows = [json.loads(line) for line in lines]
    if any(not isinstance(row, dict) for row in rows):
        raise ValueError('Recipe source returned a non-object JSON row.')
    return rows


def main() -> int:
    try:
        rows = query(sys.argv[1:])
    except (ValueError, OSError, subprocess.TimeoutExpired) as error:
        print(str(error), file=sys.stderr)
        return 1
    for row in rows:
        print(json.dumps(row, ensure_ascii=False, separators=(',', ':')))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
