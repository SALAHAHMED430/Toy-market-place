import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/layout/Main.jsx'
import Home from './components/home/Home.jsx'

const router = createBrowserRouter([{
  path:"/",
  element: <Main></Main>,
  children :[
    {path:"/",
      element : <Home></Home>
    },
    {
      
    }
  ]
}  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
