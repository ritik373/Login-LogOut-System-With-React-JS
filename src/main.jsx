import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './components/Auth-context/AuthContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </AuthContextProvider>
  </React.StrictMode>,
)
