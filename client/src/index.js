import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store' 
import App from './App';
import {positions, transitions, Provider as AlertProvider} from 'react-alert'
import alertTemplate from 'react-alert-template-basic'


const options = {
  timeout: 10000,
  positions: positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={alertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);

