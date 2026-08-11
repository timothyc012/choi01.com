import React from 'react';
import { createRoot } from 'react-dom/client';
import { GuestCanvasPage } from './GuestCanvasPage';
import 'chois-canvas/style.css';
import './guest-canvas.css';

if (import.meta.env.DEV) {
  void import('react-grab');
  void import('react-scan').then(({ scan }) => scan({ enabled: true }));
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GuestCanvasPage />
  </React.StrictMode>,
);
