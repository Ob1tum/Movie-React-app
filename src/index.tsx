import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/app';
import store, { persistor } from './store/store';
import NetworkStatus from './components/network-status/network-status';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NetworkStatus>
          <App />
        </NetworkStatus>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
