import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App, { NotFoundPage } from './App.tsx';
import './index.css';

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
const showHome = normalizedPath === '/' || normalizedPath === '/index.html';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {showHome ? <App /> : <NotFoundPage />}
  </StrictMode>,
);
