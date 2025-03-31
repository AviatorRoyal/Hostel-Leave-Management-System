import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import ManageStudents from "./ManageStudents";
import ScanQR from "./ScanQR";
import Logs from "./Logs";
import Logout from "./Logout";
import ManageLeaves from "./ManageLeaves"; // Import ManageLeaves component

const OfficeDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const styles = {
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "Arial, sans-serif",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            boxSizing: "border-box",
        },
        header: {
            display: "flex",
            alignItems: "center",
            background: "#007BFF",
            height: "80px",
            width: "100%",
            color: "white",
            padding: "10px",
            justifyContent: "center",
            position: "relative",
        },
        logo: {
            height: "60px",
            marginLeft: "10px",
        },
        sidebar: {
            width: sidebarOpen ? "250px" : "0", // Toggle width based on sidebar state
            height: "100vh",
            background: "#007BFF",
            color: "white",
            position: "fixed",
            left: "0",
            top: "80px",
            paddingTop: "20px",
            boxSizing: "border-box",
            transition: "width 0.3s",
        },
        sidebarLink: {
            display: "block",
            padding: "15px",
            color: "white",
            textDecoration: "none",
        },
        sidebarLinkHover: {
            background: "#0056b3",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            flex: 1,
            padding: "20px",
            marginLeft: sidebarOpen ? "250px" : "0",  // Adjust content margin based on sidebar state
            transition: "margin-left 0.3s",
            backgroundColor: "#F4F4F4",  // Set background color for the content area
        },
    };

    return (
        <div style={styles.body}>
            {/* Header */}
            <div style={styles.header}>
                <img src="/vit_logo_colored.png" alt="VITCC Logo" style={styles.logo} />
            </div>

            {/* Sidebar */}
            <div style={styles.sidebar}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div style={styles.content}>
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="scan-qr" element={<ScanQR />} />
                    <Route path="logs" element={<Logs />} />
                    <Route path="logout" element={<Logout />} />
                    {/* Set the default route for leaves */}
                    <Route path="/" element={<ManageLeaves />} />
                </Routes>
            </div>
        </div>
    );
};

export default OfficeDashboard;
