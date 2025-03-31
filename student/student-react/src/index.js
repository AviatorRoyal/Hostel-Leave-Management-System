import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './components/student/LoginPage';
import OfficeLogin from "./components/office/officeLogin";
import Dashboard from './components/office/officeDashboard';
import StudentDashboard from './components/student/studentDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/office/officeLogin" element={<OfficeLogin />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
