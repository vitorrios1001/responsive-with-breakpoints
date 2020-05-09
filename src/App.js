import React from 'react';

import { useTheme } from './contexts/themeContext';

import './styles.scss'

function App() {
  const { viewPort } = useTheme()

  return (
    <div className="container">
      <div className="content">
        <p>Viewport: {viewPort.text.toUpperCase()}</p>
        <span>Resize your screen width to test</span>
      </div>    
    </div>
  );
}

export default App;
