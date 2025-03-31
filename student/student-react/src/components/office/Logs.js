import React from "react";
import BackButton from "./BackButton"; // Import BackButton

const Logs = () => {
    return (
        <div>
            <BackButton />  {/* Back Button Added */}
            <h1>System Logs</h1>
            <p>View all login attempts, leave approvals, and other logs.</p>
        </div>
    );
};

export default Logs;
