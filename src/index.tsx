import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GeolocalizationProvider } from './context/weatherContext';
import $ from 'jquery';

declare global {
  interface Window {
    $: any;
  }
}

(window as any).$ = $;

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

