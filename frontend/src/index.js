import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
=======
import AppStateProvider from './state/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppStateProvider>
    <App />
    </AppStateProvider>
>>>>>>> origin/shopbe
  </React.StrictMode>
);

