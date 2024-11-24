import React from 'react' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import dotenv from "dotenv";
import { Provider } from 'react-redux';
import store from './redux/store.js';



createRoot(document.getElementById('root')).render(
  React.createElement(Provider, { store },
    React.createElement(StrictMode, null,
      React.createElement(App, null)


    )
  )
);

