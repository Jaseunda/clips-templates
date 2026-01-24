import React from 'react';
import ReactDOM from 'react-dom/client';
import { SafeAreaProvider } from '@notapublicfigureanymore/relay-sdk';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </React.StrictMode>,
);