import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GeolocalizationProvider } from './context/geolocalizationContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GeolocalizationProvider>
      <App />
    </GeolocalizationProvider>
  </React.StrictMode>
);

