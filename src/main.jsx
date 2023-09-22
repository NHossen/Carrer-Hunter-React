import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Component/RootFile/Root'
import Appliedjobs from './Component/AppliedJobs/Appliedjobs'
import ErrorPage from './Component/ErrorPage/ErrorPage'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <div>Welcome To my Website</div>
      },
      {
        path:"/jobs",
        element: <div>Jobs in our website</div>
      },
      {
        path:"/appliedJobs",
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:"/statistics",
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
