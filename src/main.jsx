import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './variables.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
