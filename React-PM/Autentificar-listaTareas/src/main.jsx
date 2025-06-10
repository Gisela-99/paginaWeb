import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserProvider from './providers/UserProvider.jsx'
import Router from './app/Router.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App /> 
      {/* <Router />   */}
    </UserProvider>
  </StrictMode>,
)
