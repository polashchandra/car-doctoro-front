import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router.jsx';
import AuthContext from './Authcontext/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthContext>

        <RouterProvider router={router} />
      </AuthContext>
    </React.StrictMode>
  </div>
)
