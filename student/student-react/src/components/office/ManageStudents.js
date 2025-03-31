import React, { useState } from "react";
import BackButton from "./BackButton"; // Import BackButton

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: "",
        registrationNo: "",
    });

    // Handle form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value,
        });
    };

    // Handle adding a student
    const handleAddStudent = (e) => {
        e.preventDefault();
        if (newStudent.name && newStudent.registrationNo) {
            setStudents([
                ...students,
                { id: Date.now(), name: newStudent.name, registrationNo: newStudent.registrationNo },
            ]);
            setNewStudent({ name: "", registrationNo: "" }); // Clear form after adding
        } else {
            alert("Please fill out both fields!");
        }
    };

    // Handle removing a student
    const handleRemoveStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div>
            <h2>Manage Students</h2>

            <form onSubmit={handleAddStudent}>
            <div>
                <BackButton />
                <h2>Manage Students</h2>
            </div>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={newStudent.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Registration No:
                        <input
                            type="text"
                            name="registrationNo"
                            value={newStudent.registrationNo}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add Student</button>
            </form>

            {/* Students List */}
            {students.length > 0 ? (
                <div>
                    <h3>Student List</h3>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Registration No</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>
                                        {student.name}
                                    </td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>
                                        {student.registrationNo}
                                    </td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>
                                        <button onClick={() => handleRemoveStudent(student.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No students added yet.</p>
            )}
        </div>
    );
};

export default ManageStudents;
