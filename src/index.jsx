import 'normalize.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';
import './scss/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
