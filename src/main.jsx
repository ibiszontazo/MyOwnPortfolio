import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('App')).render(
    <App />
)
ReactDOM.render(<App />, document.querySelector(".App"));