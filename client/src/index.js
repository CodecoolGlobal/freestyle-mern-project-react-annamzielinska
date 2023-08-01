import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Main/Main';
import Signup from './components/Registration/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Registration/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
