import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <h1 className="text-3xl font-bold underline  bg-red-500">
    Hello world!
  </h1> */}
  </StrictMode>,
)
