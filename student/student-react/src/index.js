import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./components/student/LoginPage";
import OfficeLogin from "./components/office/officeLogin";
import OfficeDashboard from "./components/office/officeDashboard";
import OfficeProfile from "./components/office/officeProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/office/officeLogin" element={<OfficeLogin />} />
      <Route path="/office/*" element={<OfficeDashboard />} />
      <Route path="/office/profile" element={<OfficeProfile />} />
    </Routes>
  </Router>
);

reportWebVitals();
