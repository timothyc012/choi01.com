import { useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Upload } from 'lucide-react';
import type { InfiniteCanvasHandle } from 'chois-canvas/react';
import { readCanvasAttachment } from './canvasAttachments';

export function CanvasAttachmentButton({ canvasRef }: { readonly canvasRef: RefObject<InfiniteCanvasHandle | null> }) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const attach = async (file: File) => {
    setBusy(true); setError('');
    try {
      const pages = await readCanvasAttachment(file);
      canvasRef.current?.addImages(pages);
      canvasRef.current?.zoomToFit();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '파일을 읽지 못했습니다.');
    } finally { setBusy(false); }
  };
  return (
    <div className="gc-popover-anchor">
      <button type="button" className="gc-tool" disabled={busy} onClick={() => input.current?.click()} title="PDF·이미지 올리기 — 캔버스에 카드로 추가하고 위에 필기" aria-label="PDF·이미지 올리기">
        <Upload className="gc-icon" />
      </button>
      <input ref={input} type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" className="gc-hidden-input" aria-label="첨부 파일" onChange={event => {
        const file = event.currentTarget.files?.[0]; event.currentTarget.value = '';
        if (file) void attach(file);
      }} />
      {busy && <div className="gc-popover gc-attachment-status" role="status">파일을 캔버스로 가져오는 중…</div>}
      {error && <div className="gc-popover gc-attachment-status" role="alert">{error}<button type="button" className="gc-button" onClick={() => setError('')}>닫기</button></div>}
    </div>
  );
}
