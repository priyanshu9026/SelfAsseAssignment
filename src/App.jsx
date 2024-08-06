import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import DashboardLayout from './components/Layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect to sign-in page if the path is root */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Sign-in page */}
        <Route path="/signin" element={<SignIn />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
