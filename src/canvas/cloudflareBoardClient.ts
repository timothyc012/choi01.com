import type { BoardClient, BoardRow } from './boardStorage';

type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

/**
 * `BoardClient` over the site's own `/api/board` functions. The Access
 * session cookie travels with every same-origin request, so there is no token
 * handling here; the server derives the owner from the verified identity and
 * this client never sends one.
 */
export function createCloudflareBoardClient(fetchImpl: FetchLike = (input, init) => fetch(input, init)): BoardClient {
  const call = (input: string, init?: RequestInit) =>
    fetchImpl(input, { credentials: 'same-origin', ...init });

  return {
    async selectOwnBoard() {
      const res = await call('/api/board');
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(await describe(res));
      return (await res.json()) as BoardRow;
    },
    async insertBoard(row) {
      const res = await call('/api/board', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(row.snapshot),
      });
      if (!res.ok) throw new Error(await describe(res));
      return (await res.json()) as BoardRow;
    },
    async updateBoard(id, expectedRevision, snapshot) {
      const res = await call(`/api/board/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ expectedRevision, snapshot }),
      });
      if (res.status === 409) return null;
      if (!res.ok) throw new Error(await describe(res));
      return (await res.json()) as { id: string; revision: number };
    },
  };
}

async function describe(res: Response): Promise<string> {
  if (res.status === 401) return '로그인이 만료되었습니다. 다시 로그인해 주세요.';
  try {
    const body = (await res.json()) as { error?: string };
    if (body.error) return `${res.status} ${body.error}`;
  } catch { /* not JSON */ }
  return `${res.status} ${res.statusText}`;
}
