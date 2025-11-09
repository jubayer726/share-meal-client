import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Root from './MainLayout/Root.jsx'
import AuthProvider from './Authorization/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={Root} />
   </AuthProvider>
  </StrictMode>,
)
