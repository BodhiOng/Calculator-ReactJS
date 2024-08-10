import React from 'react'; 
import { createRoot } from 'react-dom/client';
import Calculator from './Calculator'; 
import './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Get the root DOM element where the React app will be rendered
const container = document.getElementById('root');
const root = createRoot(container); // Create a root for rendering

// Render the Calculator component wrapped in React.StrictMode 
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);