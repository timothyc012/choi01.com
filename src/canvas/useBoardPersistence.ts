import { useCallback, useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import type { InfiniteCanvasHandle } from 'chois-canvas/react';
import {
  BoardConflictError,
  loadOwnBoard,
  saveBoard,
  type BoardClient,
  type BoardRef,
} from './boardStorage';

export type BoardSaveStatus =
  | 'off'       // not logged in, or no backend configured
  | 'loading'   // fetching the board after login
  | 'saved'
  | 'dirty'     // edited, save scheduled
  | 'saving'
  | 'conflict'  // another device saved first; waiting for the user's choice
  | 'error';

export interface BoardPersistence {
  readonly status: BoardSaveStatus;
  readonly savedAt: Date | null;
  readonly errorMessage: string | null;
  /** Call from the canvas `onDirty`; schedules a debounced save. */
  markDirty: () => void;
  /** Save now if anything is pending. */
  flush: () => Promise<void>;
  /** 'reload' takes the other device's version; 'overwrite' saves ours on top of it. */
  resolveConflict: (choice: 'reload' | 'overwrite') => Promise<void>;
}

interface Options {
  readonly client: BoardClient | null;
  readonly userId: string | null;
  readonly canvasRef: RefObject<InfiniteCanvasHandle | null>;
  /** Asked when both the guest canvas and the stored board have content. */
  readonly confirmReplace: (message: string) => boolean;
}

const SAVE_DELAY_MS = 1500;

/**
 * Keeps the signed-in user's board in sync with the server.
 *
 * Edits are saved 1.5 s after the last change and immediately when the page is
 * hidden. Every save carries the last seen revision; when the server reports
 * that another device moved past it, nothing is overwritten and the caller is
 * asked to choose.
 */
export function useBoardPersistence({ client, userId, canvasRef, confirmReplace }: Options): BoardPersistence {
  const [status, setStatus] = useState<BoardSaveStatus>('off');
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const boardRef = useRef<BoardRef | null>(null);
  const dirtyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savingRef = useRef<Promise<void> | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const save = useCallback(async () => {
    if (!client || !boardRef.current || !dirtyRef.current) return;
    if (savingRef.current) return savingRef.current;
    const handle = canvasRef.current;
    if (!handle) return;
    const board = boardRef.current;
    dirtyRef.current = false;
    setStatus('saving');
    const run = (async () => {
      try {
        const next = await saveBoard(client, board, handle.getSnapshot());
        // Edits made while the request was in flight stay pending.
        if (boardRef.current?.id === board.id) boardRef.current = next;
        setSavedAt(new Date());
        setErrorMessage(null);
        setStatus(dirtyRef.current ? 'dirty' : 'saved');
      } catch (err) {
        dirtyRef.current = true;
        if (err instanceof BoardConflictError) {
          setStatus('conflict');
        } else {
          setErrorMessage(err instanceof Error ? err.message : String(err));
          setStatus('error');
        }
      } finally {
        savingRef.current = null;
      }
    })();
    savingRef.current = run;
    return run;
  }, [client, canvasRef]);

  const markDirty = useCallback(() => {
    if (!client || !boardRef.current) return;
    dirtyRef.current = true;
    setStatus(prev => (prev === 'conflict' ? prev : 'dirty'));
    clearTimer();
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      void save();
    }, SAVE_DELAY_MS);
  }, [client, save]);

  const flush = useCallback(async () => {
    clearTimer();
    await save();
  }, [save]);

  // Login: fetch (or create) the board and put it on the canvas.
  useEffect(() => {
    boardRef.current = null;
    dirtyRef.current = false;
    clearTimer();
    if (!client || !userId) {
      setStatus('off');
      setSavedAt(null);
      return;
    }
    let cancelled = false;
    setStatus('loading');
    (async () => {
      try {
        const board = await loadOwnBoard(client, userId);
        if (cancelled) return;
        const handle = canvasRef.current;
        boardRef.current = { id: board.id, revision: board.revision };
        const guestHasContent = (handle?.getSnapshot().shapes.length ?? 0) > 0;
        const storedHasContent = board.snapshot.shapes.length > 0;
        if (guestHasContent && (!storedHasContent || !confirmReplace(
          '저장된 보드가 있습니다. 지금 화면의 내용을 버리고 저장된 보드를 불러올까요?\n"취소"를 누르면 지금 화면의 내용이 보드로 저장됩니다.',
        ))) {
          // Keep what is on screen and make it the first save.
          dirtyRef.current = true;
          setStatus('dirty');
          await save();
          return;
        }
        handle?.loadSnapshot(board.snapshot);
        setSavedAt(new Date());
        setErrorMessage(null);
        setStatus('saved');
      } catch (err) {
        if (cancelled) return;
        setErrorMessage(err instanceof Error ? err.message : String(err));
        setStatus('error');
      }
    })();
    return () => { cancelled = true; };
  }, [client, userId, canvasRef, confirmReplace, save]);

  const resolveConflict = useCallback(async (choice: 'reload' | 'overwrite') => {
    if (!client || !userId || !boardRef.current) return;
    try {
      const latest = await loadOwnBoard(client, userId);
      boardRef.current = { id: latest.id, revision: latest.revision };
      if (choice === 'reload') {
        canvasRef.current?.loadSnapshot(latest.snapshot);
        dirtyRef.current = false;
        setSavedAt(new Date());
        setStatus('saved');
        return;
      }
      dirtyRef.current = true;
      await save();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : String(err));
      setStatus('error');
    }
  }, [client, userId, canvasRef, save]);

  // Leaving or backgrounding the tab saves whatever is pending right away.
  useEffect(() => {
    const onHide = () => { if (document.visibilityState === 'hidden') void flush(); };
    window.addEventListener('pagehide', onHide);
    document.addEventListener('visibilitychange', onHide);
    return () => {
      window.removeEventListener('pagehide', onHide);
      document.removeEventListener('visibilitychange', onHide);
      clearTimer();
    };
  }, [flush]);

  return { status, savedAt, errorMessage, markDirty, flush, resolveConflict };
}
