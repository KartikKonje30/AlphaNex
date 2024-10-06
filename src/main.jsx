import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { AppProvider } from './context/portfolioContext'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <AppProvider>
    <App className="!scroll-smooth"/>
    </AppProvider>
  </React.StrictMode>,
);
