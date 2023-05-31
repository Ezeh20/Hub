import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ThemeContextProvider } from './Context/theme_context.tsx'
import { BrowserRouter } from 'react-router-dom'
import Scrolltotop from './Scroll-to-top.tsx'
import { CurrentIdProvider } from './Context/current_id_context/current_id.tsx'
import { PageCountContextProvider } from './Context/Presist_page/presist_page.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scrolltotop />
      <ThemeContextProvider>
        <CurrentIdProvider>
          <PageCountContextProvider>
            <App />
          </PageCountContextProvider>
        </CurrentIdProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
