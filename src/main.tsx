import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { Provider } from 'react-redux'
import store from './store'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
)
