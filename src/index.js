import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import LocalStorage from './storage/LocalStorage';
import AppUseState from './AppUseState';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <LocalStorage /> */}
    {/* <AppUseState /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
