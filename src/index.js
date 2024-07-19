import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CategoryProvider } from "./context"
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <CategoryProvider>
    <App />
    </CategoryProvider>
    </Router>
  </React.StrictMode>
);


