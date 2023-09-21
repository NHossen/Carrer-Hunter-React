import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element: <section>
      <div>Hello World</div>
      <Outlet></Outlet>
      
    </section> ,

    children:[
      {
        path:"/about",
        element: <div>Chilred</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
