import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'reset.css'
import '@arco-design/web-react/es/style/index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
