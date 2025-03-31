import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/office");  // Redirects to the office dashboard (or previous page)
    };

    return (
        <button 
            onClick={handleBack} 
            style={{
                padding: "10px 15px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "20px",
            }}
        >
            Back
        </button>
    );
};

export default BackButton;
