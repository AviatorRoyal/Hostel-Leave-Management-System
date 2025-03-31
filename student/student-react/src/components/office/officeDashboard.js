import React from "react";
import "./officeDashboard.css"; // Import the CSS file
import logo from "../../bin/vit_logo_colored.png"; // Adjust the path to your logo file

const OfficeDashboard = () => {
  const toggleNav = () => {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
      content.style.marginLeft = "250px";
    } else {
      sidebar.style.left = "-250px";
      content.style.marginLeft = "0";
    }
  };

  return (
    <div>
      <div className="header">
        <button className="toggle-btn" onClick={toggleNav}>
          ☰
        </button>
        <img src={logo} alt="VITCC Logo" className="logo" />
      </div>
      <div className="sidebar" id="sidebar">
        <a href="#">Profile</a>
        <a href="#">Manage Students</a>
        <a href="#">Scan QR</a>
        <a href="#">Logs</a>
        <a href="./login.html">Logout</a>
      </div>
      <div className="content" id="content">
        <div className="left">
          <h2>Leave Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Request Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>2025-02-01</td>
                <td>Pending</td>
              </tr>
              <tr>
                <th>Leave ID</th>
                <th>Type</th>
                <th>Registration No</th>
                <th>Name</th>
                <th>Date Uploaded</th>
                <th>Attachments</th>
              </tr>
              <tr>
                <td>001</td>
                <td>Medical</td>
                <td>22BCE1001</td>
                <td>John Doe</td>
                <td>2025-02-01</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="center">
          <h2>Approved Leaves</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Approval Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Smith</td>
                <td>2025-01-30</td>
                <td>2025-02-05</td>
              </tr>
              <tr>
                <th>Leave ID</th>
                <th>Type</th>
                <th>Registration No</th>
                <th>Name</th>
                <th>Date Uploaded</th>
                <th>Attachments</th>
              </tr>
              <tr>
                <td>002</td>
                <td>Personal</td>
                <td>22BCE1002</td>
                <td>Jane Smith</td>
                <td>2025-01-30</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right">
          <h2>Active Leaves</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Leave Start</th>
                <th>Expected Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Lee</td>
                <td>2025-01-28</td>
                <td>2025-02-03</td>
              </tr>
              <tr>
                <th>Leave ID</th>
                <th>Type</th>
                <th>Registration No</th>
                <th>Name</th>
                <th>Date Uploaded</th>
                <th>Attachments</th>
              </tr>
              <tr>
                <td>003</td>
                <td>Vacation</td>
                <td>22BCE1003</td>
                <td>Michael Lee</td>
                <td>2025-01-28</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OfficeDashboard;