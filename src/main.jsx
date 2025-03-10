import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
  Usar destructuring en las importaciones puede hacer el código más legible y evitar escribir React.StrictMode cada vez.
  
  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
*/
