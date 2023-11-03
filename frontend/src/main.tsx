import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <NextUIProvider>
          <main className={`${localStorage.getItem("theme")} text-foreground bg-background`}>
            <App />
          </main>
        </NextUIProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)