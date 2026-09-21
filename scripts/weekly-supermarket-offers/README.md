# Weekly supermarket offer collector

This directory is the source-side home for the weekly official offer collection used by choi01.com.

## Scope

- Sources: official REWE, EDEKA, Lidl, Netto, ALDI, Kaufland and public METRO pages only.
- Areas: 40468, 40474, 52062 and 44369.
- Data: food, beverages and alcohol only. Non-food, household, hygiene and online-only items are excluded.
- CSV contract: 13 columns matching public/offers/supermarket_food_offers_YYYY-MM-DD.csv.
- Every row must retain the official source URL, branch, validity period and collection timestamp.

## Publication rule

1. Collect and validate the dated CSV in a staging location.
2. Reject malformed rows, duplicates, unclear prices or out-of-period offers.
3. Copy the verified CSV to public/offers/ so the static site can consume it.
4. Run the repository weekly preflight and tests before publishing a new snapshot.

The CSV is intentionally not committed here: public/offers/ is the canonical site-facing location. This folder documents and contains the collection source and handoff contract.

## End-to-end weekly pipeline

The weekly job is a gated pipeline, not a CSV-only task:

```text
official sources -> offers.csv + coverage.csv -> temporary SQLite
-> recipe-full candidate discovery/review -> immutable snapshot prepare
-> 02Ontology release preview/approval -> public publish
```

Use `npm run meal:pipeline -- prepare ...` as the coordinator. It creates a
private staging directory with a temporary SQLite database, the recipe review
queues, the immutable snapshot, an approval receipt, and an ontology draft.
The staging database and ontology draft carry a seven-day expiry and are never
copied to `public/`.

```sh
npm run meal:pipeline -- prepare INPUT.csv \
  --coverage coverage.csv \
  --week-start YYYY-MM-DD \
  --staging-dir .staging/mohemeokji-YYYY-MM-DD-run-id \
  --database 01ontology \
  --tenant recipe-full \
  --registry data/mohemeokji/recipe-publication-registry.json \
  --rollover --previous-manifest public/mohemeokji/data/snapshots/PREVIOUS/manifest.json

npm run meal:pipeline -- verify .staging/mohemeokji-YYYY-MM-DD-run-id
npm run meal:pipeline -- publish .staging/mohemeokji-YYYY-MM-DD-run-id --approval APPROVAL_DIGEST
npm run meal:pipeline -- cleanup .staging
```

`coverage.csv` is a release gate. Every requested postcode/chain/branch must
have an explicit status and evidence URL. A zero-row result is not equivalent
to a complete collection. `수집완료` is allowed only when all source pages were
checked; partial, unavailable, or inaccessible sources remain visible in the
private audit and block a claim of complete coverage.

The ontology step is intentionally temporary: `meal_release_preview` and
`meal_release_submit` receive the sealed approval receipt, while the local
staging lease expires after seven days. The public snapshot remains the only
long-lived website data. A rejected or expired draft is deleted by cleanup and
must be recollected rather than silently promoted.
