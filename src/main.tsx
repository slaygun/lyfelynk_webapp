import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginRegister from './onboarding/LoginRegisPage';
import NotFoundContent from './NotFoundPage';

const router = createBrowserRouter([
  {
  path: '/',
  element: <LoginRegister/>,
  errorElement:<NotFoundContent/>
  },
  {
    errorElement:<NotFoundContent/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
