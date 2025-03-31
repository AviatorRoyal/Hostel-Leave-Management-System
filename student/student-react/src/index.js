import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './components/student/LoginPage';
import OfficeLogin from "./components/office/officeLogin";
import OfficeDashboard from "./components/office/officeDashboard";
import StudentDashboard from './components/student/studentDashboard';
import StudentLogin from './components/student/LoginPage';
import OfficeProfile from './components/office/officeProfile';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/office/officeLogin" element={<OfficeLogin />} />
        <Route path="/officeDashboard" element={<OfficeDashboard />} />
        <Route path="/student/LoginPage" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/officeProfile" element={<OfficeProfile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
