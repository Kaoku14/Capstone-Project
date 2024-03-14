import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Homepage/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login/index.jsx'
import  RegistrationForm from './pages/Register/index.jsx'
import AdminLogin from './pages/AdminLogin/index.jsx'
import Products from './pages/Products/index.jsx'




const urls = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: "/register", 
    element:<RegistrationForm/> 
  },
  {
    path: "/adminlogin", 
    element:<AdminLogin/> 
  },
  {
    path: "/products", 
    element:< Products/> 
  },
]
const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)