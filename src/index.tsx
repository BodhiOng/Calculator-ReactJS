import React from 'react'; 
import { createRoot } from 'react-dom/client';
import Calculator from './Calculator'; 
import './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);