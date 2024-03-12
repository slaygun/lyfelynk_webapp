import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import NotFoundContent from './NotFoundPage';
import FirstPageContent from './onboarding/FirstPage';
import RegisterPageContent from './onboarding/RegisterPage';
import RegisteredContent from './onboarding/RegisteredPage';

const router = createBrowserRouter([
  {
  path: '/',
  element: <FirstPageContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/Health-User',
  element: <RegisterPageContent/>,
  errorElement:<NotFoundContent/>
  },
  {
  path: '/Health-User/Register',
  element: <RegisteredContent/>,
  errorElement:<NotFoundContent/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
