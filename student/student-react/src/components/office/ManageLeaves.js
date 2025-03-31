import React, { useState } from "react";

const ManageLeaves = () => {
    const [selectedTable, setSelectedTable] = useState("requests");
    const [leaveRequests, setLeaveRequests] = useState([
        { id: "001", type: "Medical", regNo: "22BCE1001", name: "John Doe", date: "2025-02-01", attachment: "./attachments/001.pdf" },
        { id: "002", type: "Vacation", regNo: "22BCE1002", name: "Jane Smith", date: "2025-01-25", attachment: null },
        { id: "003", type: "Personal", regNo: "22BCE1003", name: "Michael Lee", date: "2025-01-27", attachment: "./attachments/001.pdf" },
        { id: "004", type: "Sick", regNo: "22BCE1004", name: "Alice Johnson", date: "2025-02-05", attachment: "./attachments/001.pdf" },
    ]);
    
    const [approvedLeaves, setApprovedLeaves] = useState([
        { id: "005", type: "Vacation", regNo: "22BCE1005", name: "Tom Hardy", date: "2025-01-20", attachment: "./attachments/001.pdf" },
        { id: "006", type: "Sick", regNo: "22BCE1006", name: "Emma Brown", date: "2025-02-02", attachment: null },
        { id: "007", type: "Medical", regNo: "22BCE1007", name: "Chris Green", date: "2025-01-30", attachment: "./attachments/001.pdf" },
        { id: "008", type: "Casual", regNo: "22BCE1008", name: "Liam White", date: "2025-02-08", attachment: null },
    ]);

    const [activeLeaves, setActiveLeaves] = useState([
        { id: "009", type: "Personal", regNo: "22BCE1009", name: "Sophia Blue", date: "2025-01-29", attachment: null },
        { id: "010", type: "Medical", regNo: "22BCE1010", name: "David Black", date: "2025-02-03", attachment: "./attachments/001.pdf" },
        { id: "011", type: "Sick", regNo: "22BCE1011", name: "Olivia Grey", date: "2025-02-06", attachment: null },
        { id: "012", type: "Casual", regNo: "22BCE1012", name: "Ethan Red", date: "2025-02-10", attachment: "./attachments/001.pdf" },
    ]);

    const handleApprove = (leave) => {
        if (window.confirm(`Are you sure you want to approve leave request ${leave.id}?`)) {
            setLeaveRequests(leaveRequests.filter(req => req.id !== leave.id));
            setApprovedLeaves([...approvedLeaves, leave]);
        }
    };

    const styles = {
        container: { backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", marginBottom: "20px" },
        heading: { textAlign: "center", marginBottom: "20px" },
        radioGroup: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" },
        tableContainer: { backgroundColor: "white", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", width: "100%" },
        table: { width: "100%", borderCollapse: "collapse" },
        thTd: { border: "1px solid black", padding: "10px", textAlign: "left", fontSize: "12px" },
        th: { background: "#007BFF", color: "white" },
        button: { padding: "5px 10px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Manage Leaves</h2>

            <div style={styles.radioGroup}>
                <label>
                    <input type="radio" name="tableSelect" value="requests" checked={selectedTable === "requests"} onChange={() => setSelectedTable("requests")} />
                    Leave Requests
                </label>
                <label>
                    <input type="radio" name="tableSelect" value="approved" checked={selectedTable === "approved"} onChange={() => setSelectedTable("approved")} />
                    Approved Leaves
                </label>
                <label>
                    <input type="radio" name="tableSelect" value="active" checked={selectedTable === "active"} onChange={() => setSelectedTable("active")} />
                    Active Leaves
                </label>
            </div>

            {selectedTable === "requests" && (
                <div style={styles.tableContainer}>
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
                                <th style={styles.thTd}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveRequests.map((leave) => (
                                <tr key={leave.id}>
                                    <td style={styles.thTd}>{leave.id}</td>
                                    <td style={styles.thTd}>{leave.type}</td>
                                    <td style={styles.thTd}>{leave.regNo}</td>
                                    <td style={styles.thTd}>{leave.name}</td>
                                    <td style={styles.thTd}>{leave.date}</td>
                                    <td style={styles.thTd}>
                                        {leave.attachment ? (
                                            <a href={leave.attachment} target="_blank" rel="noopener noreferrer" style={styles.link}>View</a>
                                        ) : (
                                            "NIL"
                                        )}
                                    </td>                                    <td style={styles.thTd}>
                                        <button style={styles.button} onClick={() => handleApprove(leave)}>Approve</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedTable === "approved" && (
                <div style={styles.tableContainer}>
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
                            {approvedLeaves.map((leave) => (
                                <tr key={leave.id}>
                                    <td style={styles.thTd}>{leave.id}</td>
                                    <td style={styles.thTd}>{leave.type}</td>
                                    <td style={styles.thTd}>{leave.regNo}</td>
                                    <td style={styles.thTd}>{leave.name}</td>
                                    <td style={styles.thTd}>{leave.date}</td>
                                    <td style={styles.thTd}>
                                        {leave.attachment ? (
                                            <a href={leave.attachment} target="_blank" rel="noopener noreferrer" style={styles.link}>View</a>
                                        ) : (
                                            "NIL"
                                        )}
                                    </td>                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedTable === "active" && (
                <div style={styles.tableContainer}>
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
                            {activeLeaves.map((leave) => (
                                <tr key={leave.id}>
                                    <td style={styles.thTd}>{leave.id}</td>
                                    <td style={styles.thTd}>{leave.type}</td>
                                    <td style={styles.thTd}>{leave.regNo}</td>
                                    <td style={styles.thTd}>{leave.name}</td>
                                    <td style={styles.thTd}>{leave.date}</td>
                                    <td style={styles.thTd}><a href={leave.attachment}>View</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageLeaves;
