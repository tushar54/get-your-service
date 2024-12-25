import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RootRoute } from './RootRoute/RootRoute.jsx'
import Authcontext from './AllContext/Authcontext.jsx'
import { ThemeProvider } from './AllContext/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
  <Authcontext>
   <RouterProvider router={RootRoute}></RouterProvider>
   </Authcontext>
  </ThemeProvider>
  </StrictMode>,
)
