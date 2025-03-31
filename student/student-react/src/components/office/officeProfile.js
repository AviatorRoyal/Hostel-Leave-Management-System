import React, { useState } from "react";
import BackButton from "./BackButton"; // Import BackButton

const EmployeeProfile = () => {
  // State to store employee details
  const [employee, setEmployee] = useState({
    name: "John Doe",
    empno: "1234",
    department: "IT",
    email: "john.doe@example.com",
  });

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Save updated profile
  const saveProfile = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      background: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      color: "#007bff",
    },
    label: {
      display: "block",
      marginBottom: "15px",
      fontWeight: "bold",
      color: "#333",
    },
    span: {
      marginLeft: "10px",
      fontWeight: "normal",
      color: "#555",
    },
    input: {
      marginLeft: "10px",
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    actions: {
      textAlign: "center",
      marginTop: "20px",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    editButton: {
      background: "#007bff",
      color: "white",
    },
    saveButton: {
      background: "#28a745",
      color: "white",
    },
    editButtonHover: {
      background: "#0056b3",
    },
    saveButtonHover: {
      background: "#218838",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Employee Profile</h2>
      <div>
        <label style={styles.label}>
          Name:
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span style={styles.span}>{employee.name}</span>
          )}
        </label>
        <label style={styles.label}>
          Employee Number:
          <span style={styles.span}>{employee.empno}</span>
        </label>
        <label style={styles.label}>
          Department:
          {isEditing ? (
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span style={styles.span}>{employee.department}</span>
          )}
        </label>
        <label style={styles.label}>
          Email:
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span style={styles.span}>{employee.email}</span>
          )}
        </label>
      </div>
      <div style={styles.actions}>
        {isEditing ? (
          <button
            onClick={saveProfile}
            style={{ ...styles.button, ...styles.saveButton }}
          >
            Save
          </button>
        ) : (
          

          <button
            onClick={() => setIsEditing(true)}
            style={{ ...styles.button, ...styles.editButton }}
          >
            Edit Profile
          </button>
        )}
      <BackButton />  {/* Back Button Added */}

      </div>
    </div>
  );
};

export default EmployeeProfile;