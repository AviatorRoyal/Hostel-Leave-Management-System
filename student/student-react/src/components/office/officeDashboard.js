import React, { useState } from "react";

const HostelDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

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
        toggleBtn: {
            fontSize: "24px",
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "white",
            position: "absolute",
            left: "10px",
        },
        logo: {
            height: "60px",
            marginLeft: "10px",
        },
        sidebar: {
            width: "250px",
            height: "100vh",
            background: "#007BFF",
            color: "white",
            position: "fixed",
            left: sidebarOpen ? "0" : "-250px",
            top: "80px",
            transition: "left 0.3s ease-in-out",
            paddingTop: "20px",
            boxSizing: "border-box",
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
            flexWrap: "wrap",
            transition: "margin-left 0.3s ease-in-out",
            width: "100%",
            marginLeft: sidebarOpen ? "250px" : "0",
            padding: "20px",
            boxSizing: "border-box",
            gap: "10px",
            justifyContent: "center",
        },
        panel: {
            padding: "15px",
            flex: "1 1 300px",  // Ensures responsiveness
            border: "1px solid #ccc",
            background: "#f4f4f4",
            margin: "10px",
            minWidth: "280px",
            maxWidth: "500px",
            boxSizing: "border-box",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
        },
        thTd: {
            border: "1px solid black",
            padding: "10px",
            textAlign: "left",
            fontSize: "8px",
        },
        th: {
            background: "#007BFF",
            color: "white",
            fontSize: "8px",
        },
    };

    return (
        <div style={styles.body}>
            {/* Header */}
            <div style={styles.header}>
                <button style={styles.toggleBtn} onClick={toggleSidebar}>☰</button>
                <img src="./vit_logo_colored.png" alt="VITCC Logo" style={styles.logo} />
            </div>

            {/* Sidebar */}
            <div style={styles.sidebar}>
                <a href="#" style={styles.sidebarLink}>Profile</a>
                <a href="#" style={styles.sidebarLink}>Manage Students</a>
                <a href="#" style={styles.sidebarLink}>Scan QR</a>
                <a href="#" style={styles.sidebarLink}>Logs</a>
                <a href="./login.html" style={styles.sidebarLink}>Logout</a>
            </div>

            {/* Main Content */}
            <div style={styles.content}>
                {/* Left Panel */}
                <div style={styles.panel}>
                    <h2>Leave Requests</h2>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.thTd}>Leave ID</th>
                                <th style={styles.thTd}>Type</th>
                                <th style={styles.thTd}>Registration No</th>
                                <th style={styles.thTd}>Name</th>
                                <th style={styles.thTd}>Date Uploaded</th>
                                <th style={styles.thTd}>Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.thTd}>001</td>
                                <td style={styles.thTd}>Medical</td>
                                <td style={styles.thTd}>22BCE1001</td>
                                <td style={styles.thTd}>John Doe</td>
                                <td style={styles.thTd}>2025-02-01</td>
                                <td style={styles.thTd}><a href="#">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Center Panel */}
                <div style={styles.panel}>
                    <h2>Approved Leaves</h2>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.thTd}>Leave ID</th>
                                <th style={styles.thTd}>Type</th>
                                <th style={styles.thTd}>Registration No</th>
                                <th style={styles.thTd}>Name</th>
                                <th style={styles.thTd}>Date Uploaded</th>
                                <th style={styles.thTd}>Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.thTd}>002</td>
                                <td style={styles.thTd}>Vacation</td>
                                <td style={styles.thTd}>22BCE1002</td>
                                <td style={styles.thTd}>Jane Smith</td>
                                <td style={styles.thTd}>2025-01-25</td>
                                <td style={styles.thTd}><a href="#">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Right Panel */}
                <div style={styles.panel}>
                    <h2>Active Leaves</h2>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.thTd}>Leave ID</th>
                                <th style={styles.thTd}>Type</th>
                                <th style={styles.thTd}>Registration No</th>
                                <th style={styles.thTd}>Name</th>
                                <th style={styles.thTd}>Date Uploaded</th>
                                <th style={styles.thTd}>Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.thTd}>003</td>
                                <td style={styles.thTd}>Personal</td>
                                <td style={styles.thTd}>22BCE1003</td>
                                <td style={styles.thTd}>Michael Lee</td>
                                <td style={styles.thTd}>2025-01-27</td>
                                <td style={styles.thTd}><a href="#">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HostelDashboard;
