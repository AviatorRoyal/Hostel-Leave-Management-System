import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{
            width: "250px",
            height: "100vh",
            background: "#007BFF",
            color: "white",
            position: "fixed",
            paddingTop: "20px"
        }}>
            <Link to="/office/profile" style={styles.link}>Profile</Link>
            <Link to="/office/manage-students" style={styles.link}>Manage Students</Link>
            <Link to="/office/scan-qr" style={styles.link}>Scan QR</Link>
            <Link to="/office/logs" style={styles.link}>Logs</Link>
            <Link to="/office/logout" style={styles.link}>Logout</Link>
        </div>
    );
};

const styles = {
    link: {
        display: "block",
        padding: "15px",
        color: "white",
        textDecoration: "none",
        fontSize: "18px"
    }
};

export default Sidebar;
