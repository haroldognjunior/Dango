import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
}
