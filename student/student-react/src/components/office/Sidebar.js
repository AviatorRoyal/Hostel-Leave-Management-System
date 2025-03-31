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
            <Link to="/profile" style={styles.link}>Profile</Link>
            <Link to="/manage-students" style={styles.link}>Manage Students</Link>
            <Link to="/scan-qr" style={styles.link}>Scan QR</Link>
            <Link to="/logs" style={styles.link}>Logs</Link>
            <Link to="/logout" style={styles.link}>Logout</Link>
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
