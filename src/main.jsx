import React from 'react'
import ReactDOM from 'react-dom/client'
import People from './components/people'
import './index.css'
import { famousPeople } from './components/Data'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <People people={famousPeople } />
  </React.StrictMode>,
)
