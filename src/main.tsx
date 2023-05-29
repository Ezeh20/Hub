import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ThemeContextProvider } from './Context/theme_context.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MediaIdProvider } from './Context/current_id_context/current_id.tsx'
import Scrolltotop from './Scroll-to-top.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Scrolltotop />
      <ThemeContextProvider>
        <MediaIdProvider>
          <App />
        </MediaIdProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
