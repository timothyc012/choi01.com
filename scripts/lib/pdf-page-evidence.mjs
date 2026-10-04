import crypto from 'node:crypto';
const sha256=(text)=>crypto.createHash('sha256').update(text).digest('hex');
export function pdfPageEvidence(text,pageCount,reviews=[]) {
  const chunks=String(text).split('\f');if(chunks.at(-1)==='')chunks.pop();
  if(chunks.length!==pageCount)throw new Error('PDF text page count does not match source');
  const pages=chunks.map((page,index)=>({page:index+1,textSha256:sha256(page),charCount:page.length}));
  const checked=pages.filter(page=>reviews.some(review=>review.page===page.page&&review.textSha256===page.textSha256&&page.charCount>0&&review.reviewed===true));
  return {pageCount,processedPageCount:pages.length,extractedPageCount:pages.filter(page=>page.charCount>0).length,
    checkedPageCount:checked.length,unreadPages:pages.filter(page=>!page.charCount).map(page=>page.page),pages,
    status:checked.length===pageCount?'수집완료':'일부수집'};
}
