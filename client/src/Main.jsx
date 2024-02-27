import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginSignUp from './components/LoginSignUp.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'loginsignup',
        element: <LoginSignUp />
      },
      {
        path: '*',
        element: <Error />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
