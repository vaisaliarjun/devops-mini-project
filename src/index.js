// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Import global styles, if you have them
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional: For performance measuring

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Optional: measure performance (can be removed if not needed)
reportWebVitals();
