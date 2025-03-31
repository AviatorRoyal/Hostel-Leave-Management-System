const express = require("express");
const db = require("./database");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🟢 Student Login
app.post("/login/student", (req, res) => {
    const { regNo, password } = req.body;
    db.get("SELECT * FROM login_student WHERE regNo = ? AND password = ?", [regNo, password], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (row) res.json({ message: "Login successful", student: row });
        else res.status(401).json({ message: "Invalid credentials" });
    });
});

// 🟢 Office Staff Login
app.post("/login/office", (req, res) => {
    const { empId, password } = req.body;
    db.get("SELECT * FROM login_office WHERE empId = ? AND password = ?", [empId, password], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (row) res.json({ message: "Login successful", office: row });
        else res.status(401).json({ message: "Invalid credentials" });
    });
});

// 🟢 Get All Leaves
app.get("/leaves", (req, res) => {
    db.all("SELECT * FROM leaves", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 🟢 Add a New Leave Request
app.post("/leaves", (req, res) => {
    const { name, regNo, leaveStatus, leaveFromDate, leaveFromTime, leaveToDate, leaveToTime, leaveType, dateUploaded, attachment } = req.body;
    db.run(
        "INSERT INTO leaves (name, regNo, leaveStatus, leaveFromDate, leaveFromTime, leaveToDate, leaveToTime, leaveType, dateUploaded, attachment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [name, regNo, leaveStatus, leaveFromDate, leaveFromTime, leaveToDate, leaveToTime, leaveType, dateUploaded, attachment],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ leaveId: this.lastID, ...req.body });
        }
    );
});

// 🟢 Log Actions (Store System Logs)
app.post("/logs", (req, res) => {
    const { action, user, timestamp } = req.body;
    db.run("INSERT INTO logs (action, user, timestamp) VALUES (?, ?, ?)", [action, user, timestamp], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ logId: this.lastID, action, user, timestamp });
    });
});

// 🟢 Get Logs
app.get("/logs", (req, res) => {
    db.all("SELECT * FROM logs", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
