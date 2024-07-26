import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import stylesText from './index.css?inline';
import { App } from './app';

const root = document.getElementById('root')!;
const shadowRoot = root.attachShadow({ mode: 'open' });

const style = document.createElement('style');
style.textContent = stylesText;
shadowRoot.appendChild(style);

const container = document.createElement('div');
container.style.height = '100%';
shadowRoot.appendChild(container);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
