import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import Dashboard from './Pages/dashboard'

const route = createBrowserRouter([
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  },{
    path:"/dashboard",
    element:<Dashboard/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
