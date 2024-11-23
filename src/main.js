import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import dotenv from "dotenv";
import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      {/* {dotenv.config()} */}
      <App />
    </StrictMode>
  </Provider>
)
