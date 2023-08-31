import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Coctail from './components/Coctail/Coctail';
import Signup from './components/Registration/Signup';
import Login from './components/Registration/Login';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/coctail/:coctailId" element={<Coctail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);

