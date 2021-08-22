import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './app/store';
import Root from './app/index.js';

function App() {
  return (
    <ChakraProvider>
        <Root />
    </ChakraProvider>
  );
}

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
