export interface CanvasAttachment {
  readonly src: string;
  readonly fileName: string;
  readonly w: number;
  readonly h: number;
}

export class AttachmentError extends Error {}
const MAX_FILE_BYTES = 25 * 1024 * 1024;
const MAX_PAGE_COUNT = 30;
const RASTER_WIDTH = 1600;

export async function readCanvasAttachment(file: File): Promise<readonly CanvasAttachment[]> {
  if (file.size > MAX_FILE_BYTES) throw new AttachmentError('25MB 이하의 파일을 선택해 주세요.');
  if (file.type === 'application/pdf' || /\.pdf$/i.test(file.name)) return readPdf(file);
  if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
    throw new AttachmentError('PDF, JPG, PNG, WebP 파일을 선택해 주세요.');
  }
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
  try {
    const scale = Math.min(1, RASTER_WIDTH / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new AttachmentError('이미지 변환을 시작할 수 없습니다.');
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return [toAttachment(canvas, file.name)];
  } finally { bitmap.close(); }
}

function toAttachment(canvas: HTMLCanvasElement, fileName: string): CanvasAttachment {
  const w = Math.min(720, canvas.width);
  return { src: canvas.toDataURL('image/png'), fileName, w, h: w * canvas.height / canvas.width };
}

async function readPdf(file: File): Promise<readonly CanvasAttachment[]> {
  const pdfjs = await import('pdfjs-dist');
  const { default: workerUrl } = await import('pdfjs-dist/build/pdf.worker.min.mjs?url');
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  const task = pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) });
  try {
    const document = await task.promise;
    if (document.numPages > MAX_PAGE_COUNT) throw new AttachmentError('PDF는 한 번에 30페이지까지 첨부할 수 있습니다.');
    const attachments: CanvasAttachment[] = [];
    for (let i = 1; i <= document.numPages; i++) {
      const page = await document.getPage(i);
      const natural = page.getViewport({ scale: 1 });
      const viewport = page.getViewport({ scale: RASTER_WIDTH / Math.max(natural.width, natural.height) });
      const canvas = window.document.createElement('canvas');
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext('2d');
      if (!context) throw new AttachmentError('PDF 변환을 시작할 수 없습니다.');
      await page.render({ canvas, canvasContext: context, viewport }).promise;
      attachments.push(toAttachment(canvas, `${file.name} · ${i}페이지`));
      canvas.width = 0; canvas.height = 0;
      page.cleanup();
    }
    return attachments;
  } catch (error) {
    if (error instanceof Error && error.name === 'PasswordException') {
      throw new AttachmentError('암호를 해제한 PDF를 첨부해 주세요.');
    }
    throw error;
  } finally { await task.destroy(); }
}
