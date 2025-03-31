const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database (or create if it doesn’t exist)
const db = new sqlite3.Database("./hostel.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) return console.error(err.message);
    console.log("Connected to SQLite database.");
});

// Create Students Login Table
db.run(`
    CREATE TABLE IF NOT EXISTS login_student (
        regNo TEXT PRIMARY KEY,
        password TEXT NOT NULL
    )
`);

// Create Office Staff Login Table
db.run(`
    CREATE TABLE IF NOT EXISTS login_office (
        empId TEXT PRIMARY KEY,
        password TEXT NOT NULL
    )
`);

// Create Leaves Table
db.run(`
    CREATE TABLE IF NOT EXISTS leaves (
        leaveId INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        regNo TEXT NOT NULL,
        leaveStatus TEXT NOT NULL,
        leaveFromDate TEXT NOT NULL,
        leaveFromTime TEXT NOT NULL,
        leaveToDate TEXT NOT NULL,
        leaveToTime TEXT NOT NULL,
        leaveType TEXT NOT NULL,
        dateUploaded TEXT NOT NULL,
        attachment TEXT
    )
`);

// Create Logs Table
db.run(`
    CREATE TABLE IF NOT EXISTS logs (
        logId INTEGER PRIMARY KEY AUTOINCREMENT,
        action TEXT NOT NULL,
        user TEXT NOT NULL,
        timestamp TEXT NOT NULL
    )
`);

module.exports = db;
