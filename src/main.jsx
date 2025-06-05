// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// <<< Šriftų importai: Poiret One, Montserrat, Lora >>>
import '@fontsource/poiret-one/400.css'; // Poiret One Regular
import '@fontsource/montserrat/400.css'; // Montserrat Regular
import '@fontsource/montserrat/700.css'; // Montserrat Bold
import '@fontsource/lora/400.css';       // Lora Regular
import '@fontsource/lora/700.css';       // Lora Bold


// import 'flag-icon-css/css/flag-icons.min.css'; // Pašalinta
// import 'react-flag-icon/css/flag-icons.min.css'; // Pašalinta
// <<< Pridedame TEISINGĄ flag-icons CSS importą >>>
import 'flag-icons/css/flag-icons.min.css';

// Pagrindinis CSS failas
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);