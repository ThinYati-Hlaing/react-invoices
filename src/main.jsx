import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GeneralContextProvider from './contexts/GeneralContext.jsx';

export const GeneralContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
)
