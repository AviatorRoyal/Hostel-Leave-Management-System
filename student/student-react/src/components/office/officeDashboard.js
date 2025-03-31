import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar"; // Ensure Sidebar exists
import Profile from "./Profile";
import ManageStudents from "./ManageStudents";
import ScanQR from "./ScanQR";
import Logs from "./Logs";
import Logout from "./Logout";

const OfficeDashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar for Navigation */}
            <Sidebar />

            {/* Content Area */}
            <div style={{ flex: 1, padding: "20px", marginLeft: "260px" }}>
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="scan-qr" element={<ScanQR />} />
                    <Route path="logs" element={<Logs />} />
                    <Route path="logout" element={<Logout />} />
                </Routes>
            </div>
        </div>
    );
};

export default OfficeDashboard;
