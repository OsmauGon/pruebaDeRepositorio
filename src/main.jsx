import React from 'react'
import ReactDOM from 'react-dom/client'
import { WheatherApp } from './WheatherApp'
import './Styles/weatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheatherApp/>
  </React.StrictMode>,
)
