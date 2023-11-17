import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css' //bg, bg-filter and alignment
import './styles/text-details.css' //text formatting
import './styles/layout.css' //margins and paddings of elements
import './styles/mq450.css' //media query 450px for mobile phones
import './styles/logoTexture.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
