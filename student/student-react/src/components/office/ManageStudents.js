import React, { useState } from "react";
import BackButton from "./BackButton"; // Import the BackButton

const ManageStudents = () => {
    // Initial student data
    const [students, setStudents] = useState([
        { id: "1", name: "John Doe", regNo: "22BCE1001", age: 20, department: "CSE" },
        { id: "2", name: "Jane Smith", regNo: "22BCE1002", age: 21, department: "ECE" },
        { id: "3", name: "Michael Lee", regNo: "22BCE1003", age: 22, department: "IT" },
        { id: "4", name: "Alice Johnson", regNo: "22BCE1004", age: 23, department: "CSE" },
        { id: "5", name: "Tom Hardy", regNo: "22BCE1005", age: 20, department: "EEE" },
        { id: "6", name: "Emma Brown", regNo: "22BCE1006", age: 21, department: "CSE" },
        { id: "7", name: "Chris Green", regNo: "22BCE1007", age: 22, department: "ECE" },
        { id: "8", name: "Sophia Blue", regNo: "22BCE1008", age: 21, department: "IT" },
        { id: "9", name: "David Black", regNo: "22BCE1009", age: 23, department: "CSE" },
        { id: "10", name: "Liam White", regNo: "22BCE1010", age: 20, department: "EEE" },
    ]);

    const [newStudent, setNewStudent] = useState({ name: "", regNo: "", age: "", department: "" });
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleAddStudent = () => {
        // Ask for confirmation before adding the student
        const confirmation = window.confirm(`Are you sure you want to add ${newStudent.name}?`);
        if (confirmation) {
            setStudents([
                ...students,
                { ...newStudent, id: (students.length + 1).toString() },
            ]);
            setNewStudent({ name: "", regNo: "", age: "", department: "" }); // Reset the form
        }
    };

    const handleDelete = (id) => {
        // Ask for confirmation before deleting the student
        const studentToDelete = students.find(student => student.id === id);
        const confirmation = window.confirm(`Are you sure you want to delete ${studentToDelete.name}?`);
        if (confirmation) {
            setStudents(students.filter(student => student.id !== id));
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const styles = {
        container: { padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", marginBottom: "20px" },
        heading: { textAlign: "center", marginBottom: "20px" },
        table: { width: "100%", borderCollapse: "collapse" },
        thTd: { border: "1px solid black", padding: "10px", textAlign: "left", fontSize: "14px" },
        button: { padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" },
        searchInput: { padding: "8px", width: "80%", marginBottom: "20px" },
        formInput: { padding: "8px", width: "48%", margin: "5px 1%" },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Manage Students</h2>
            <BackButton />

            <input
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={handleSearch}
                style={styles.searchInput}
            />

            <h3>Add Student</h3>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={handleChange}
                    style={styles.formInput}
                />
                <input
                    type="text"
                    name="regNo"
                    placeholder="Reg No"
                    value={newStudent.regNo}
                    onChange={handleChange}
                    style={styles.formInput}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={newStudent.age}
                    onChange={handleChange}
                    style={styles.formInput}
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={newStudent.department}
                    onChange={handleChange}
                    style={styles.formInput}
                />
                <button onClick={handleAddStudent} style={styles.button}>Add Student</button>
            </div>

            <h3>Student List</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.thTd}>Name</th>
                        <th style={styles.thTd}>Reg No</th>
                        <th style={styles.thTd}>Age</th>
                        <th style={styles.thTd}>Department</th>
                        <th style={styles.thTd}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.id}>
                            <td style={styles.thTd}>{student.name}</td>
                            <td style={styles.thTd}>{student.regNo}</td>
                            <td style={styles.thTd}>{student.age}</td>
                            <td style={styles.thTd}>{student.department}</td>
                            <td style={styles.thTd}>
                                <button onClick={() => handleDelete(student.id)} style={styles.button}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudents;
