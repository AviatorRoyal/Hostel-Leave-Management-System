import React, { useState } from 'react';
import './Dashboard.css'; // Create a separate CSS file for styles
import vitLogo from './bin/vit_logo_colored.png';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleNav = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dashboard-container">
            <header className="header">
                <button className="toggle-btn" onClick={toggleNav}>☰</button>
                <img src={vitLogo} alt="VITCC Logo" className="logo" />
            </header>
            
            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <a href="#">Profile</a>
                <a href="#">Manage Students</a>
                <a href="#">Scan QR</a>
                <a href="#">Logs</a>
                <a href="./login.html">Logout</a>
            </aside>
            
            <main className={`content ${sidebarOpen ? 'shifted' : ''}`}>
                <section className="left">
                    <h2>Leave Requests</h2>
                    <table>
                        <thead>
                            <tr><th>Leave ID</th><th>Type</th><th>Registration No</th><th>Name</th><th>Date Uploaded</th><th>Attachments</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>001</td><td>Library</td><td>22BCE1001</td><td>Ramanuj Agarwal</td><td>2025-02-01</td><td><a href="">View</a></td></tr>
                        </tbody>
                    </table>
                </section>
                
                <section className="center">
                    <h2>Approved Leaves</h2>
                    <table>
                        <thead>
                            <tr><th>Leave ID</th><th>Type</th><th>Registration No</th><th>Name</th><th>Date Uploaded</th><th>Attachments</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>002</td><td>Garage</td><td>22BCE1002</td><td>Om</td><td>2025-01-30</td><td><a href="#">View</a></td></tr>
                        </tbody>
                    </table>
                </section>
                
                <section className="right">
                    <h2>Active Leaves</h2>
                    <table>
                        <thead>
                            <tr><th>Leave ID</th><th>Type</th><th>Registration No</th><th>Name</th><th>Date Uploaded</th><th>Attachments</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>003</td><td>Lab</td><td>22BCE1003</td><td>Navneet</td><td>2025-01-28</td><td><a href="#">View</a></td></tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;