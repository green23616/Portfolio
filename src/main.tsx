import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Component
import App from './App.tsx';
// Recoil
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>,
);
