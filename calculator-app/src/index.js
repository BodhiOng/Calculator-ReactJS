import React from 'react'; // Import React library
import { createRoot } from 'react-dom/client'; // Import createRoot from React DOM client for rendering
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals for performance measurement
import Calculator from './Calculator'; // Import the Calculator component
import './Calculator.css'; // Import CSS styles for the Calculator components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

// Get the root DOM element where the React app will be rendered
const container = document.getElementById('root');
const root = createRoot(container); // Create a root for rendering

// Render the Calculator component wrapped in React.StrictMode 
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
