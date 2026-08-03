import React from 'react';
import { createRoot } from 'react-dom/client';
import { GuestCanvasPage } from './GuestCanvasPage';
import 'chois-canvas/style.css';
import './guest-canvas.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GuestCanvasPage />
  </React.StrictMode>,
);
