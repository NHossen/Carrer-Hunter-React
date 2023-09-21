import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Component/RootFile/Root'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Root></Root> ,

    children:[
      {
        path:"/",
        element: <div>Welcome To my Website</div>
      },
      {
        path:"/about",
        element: <div>About my website reade more</div>
      },
      {
        path:"/job",
        element: <div>Jobs in our website</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
