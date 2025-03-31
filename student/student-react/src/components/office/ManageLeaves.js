import React from "react";

const ManageLeaves = () => {
    const styles = {
        tableWrapper: {
            display: "flex",
            gap: "20px",  // Add space between tables
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "20px",
        },
        table: {
            width: "48%",  // Make tables 48% width to fit side by side
            borderCollapse: "collapse",
            backgroundColor: "white",  // Set background to white
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",  // Add shadow for better visibility
        },
        thTd: {
            border: "1px solid black",
            padding: "10px",
            textAlign: "left",
            fontSize: "px",
        },
        th: {
            background: "#007BFF",
            color: "white",
        },
        section: {
            marginBottom: "20px",
            backgroundColor: "white",  // Background color for the section
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        },
        heading: {
            margin: "10px 0",
        },
    };

    return (
        <div style={styles.section}>
            <h2 style={styles.heading}>Manage Leaves</h2>

            {/* Leave Tables Side by Side */}
            <div style={styles.tableWrapper}>
                {/* Leave Requests Table */}
                <div style={styles.table}>
                    <h3 style={styles.heading}>Leave Requests</h3>
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

                {/* Approved Leaves Table */}
                <div style={styles.table}>
                    <h3 style={styles.heading}>Approved Leaves</h3>
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
            </div>

            {/* Active Leaves Table */}
            <div>
                <h3 style={styles.heading}>Active Leaves</h3>
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
    );
};

export default ManageLeaves;
