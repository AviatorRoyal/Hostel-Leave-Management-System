import React from "react";
import "./officeLogin.css"; // Ensure your CSS file includes the updated styles
import logo from "../../bin/vit_logo_colored.png";
import { useNavigate } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi"; // Import refresh icon
import {Link} from 'react-router-dom'; // Import Link for navigation

class OfficeLogin extends React.Component {
  constructor(props) {
    super(props);
    this.captchaExpected = 0; // Captcha value stored as a class property
  }

  // Function to generate a new captcha
  generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    this.captchaExpected = a + b; // Store the expected captcha value
    document.getElementById("captcha-question").innerText = `${a} + ${b} = ?`;
  };

  // Function to validate the captcha
  validateCaptcha = (event) => {
    const answer = document.getElementById("captcha-answer").value;
    if (parseInt(answer, 10) !== this.captchaExpected) {
      event.preventDefault();
      alert("Captcha incorrect. Try again.");
      this.generateCaptcha(); // Generate a new captcha
      return false;
    } else {
      alert("Login successful!");
      this.props.navigate("/officeDashboard");
    }
  };

  // Generate captcha when the component is mounted
  componentDidMount() {
    this.generateCaptcha();
  }

  render() {
    return (
      <div className="login-container">
        <center>
          <img src={logo} alt="VITCC Logo" className="logo" />
          <h2>Hostel Authority Login</h2>
          <form onSubmit={this.validateCaptcha}>
            <input type="text" placeholder="Employee number" name="empno" required className="input-field" />
            <input type="password" placeholder="Password" name="password" required className="input-field" />
            <div className="captcha-container">
              <p id="captcha-question" className="captcha-text" style={{ display: "inline-block", marginRight: "10px" }}></p>
              <button type="button" onClick={this.generateCaptcha} className="refresh-captcha" style={{ display: "inline-block", verticalAlign: "middle" }}>
                <FiRefreshCcw size={20} />
              </button>
            </div>
            <input type="text" id="captcha-answer" placeholder="Enter answer" required className="input-field" />
            <input type="submit" value="Login" className="submit-button" />
          </form>
          <footer className="footer">
          If You are Student, Please follow the below link
          <br />
          <br />
          {/* <a href="../office/login.html">Hostel Login</a> */}
          <Link to="/student/LoginPage">Student Login</Link>
          </footer>
        </center>
      </div>
    );
  }
}

// Wrap the component with `useNavigate` to pass the `navigate` prop
const OfficeLoginWithNavigate = (props) => {
  const navigate = useNavigate();
  return <OfficeLogin {...props} navigate={navigate} />;
};

export default OfficeLoginWithNavigate;
