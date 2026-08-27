import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PrivateMealPage } from './meal/PrivateMealPage.tsx';
import './meal/meal-page.css';

const root = document.getElementById('meal-root');
if (!root) throw new Error('meal root is missing');

createRoot(root).render(
  <StrictMode>
    <PrivateMealPage />
  </StrictMode>,
);
