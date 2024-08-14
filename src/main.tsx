import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { getDesignTokens } from './styles/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={getDesignTokens('light')}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
