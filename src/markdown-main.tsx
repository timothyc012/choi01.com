import React from 'react';
import { createRoot } from 'react-dom/client';
import { MarkdownPreviewPage } from './markdown/MarkdownPreviewPage';
import './markdown/markdown-preview.css';

if (import.meta.env.DEV) {
  void import('react-grab');
  void import('react-scan').then(({ scan }) => scan({ enabled: true }));
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MarkdownPreviewPage />
  </React.StrictMode>,
);
