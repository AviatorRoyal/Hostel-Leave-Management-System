import React from "react";
import BackButton from "./BackButton"; // Import BackButton

const ScanQR = () => {
    return (

        <div>
            <BackButton />  {/* Back Button Added */}
            <h1>Scan QR Code</h1>
            <p>Use a webcam or scanner to scan QR codes.</p>
        </div>
    );
};

export default ScanQR;
