import React from 'react';
import ReactDOM from 'react-dom/client';
import { SafeAreaProvider } from '@notapublicfigureanymore/relay-sdk';
import App from './App';
import './index.css';

import { Locked } from './locked';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SafeAreaProvider>
      <Locked>
        <App />
      </Locked>
    </SafeAreaProvider>
  </React.StrictMode>,
);