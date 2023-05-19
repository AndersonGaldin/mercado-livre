import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles';
import Home from './pages/Home';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<>
    <GlobalStyles />
    <Home />
  </>);
}

