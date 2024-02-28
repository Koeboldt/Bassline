import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginSignUp from './pages/LoginSignUp.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import SearchPage from './pages/SearchPage.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginSignUp />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'search',
        element: <SearchPage />
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
