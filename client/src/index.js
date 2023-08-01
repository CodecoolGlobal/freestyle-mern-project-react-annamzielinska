import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Main/Main';
import Coctail from './components/Coctail/Coctail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "coctail/:coctailId",
    element: <Coctail/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
