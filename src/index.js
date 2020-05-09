import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from './contexts/themeContext';

import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
