// importo librerias y estilos generales (no los de cada componente)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* llamo a la app.js */}
    <App />
  </React.StrictMode>
);

