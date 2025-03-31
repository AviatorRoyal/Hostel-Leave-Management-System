import React from "react";

const Logs = ({ logs = [] }) => { // Default logs to an empty array if undefined
    return (
        <div>
            {logs.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {logs.map(log => (
                        <li key={log.id} style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
                            {log.message}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No logs available.</p>
            )}
        </div>
    );
};

export default Logs;
