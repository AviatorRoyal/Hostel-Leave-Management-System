import React from "react";
import "./officeLogin.css"; // Create a separate CSS file for styles
import logo from "../../bin/vit_logo_colored.png";

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
    }
  };

  // Generate captcha when the component is mounted
  componentDidMount() {
    this.generateCaptcha();
  }

  render() {
    return (
      <div className="login-container">
        <img src={logo} alt="VITCC Logo" className="logo" />
        <h2>Hostel Authority Login</h2>
        <form action="dashboard.html" method="POST" onSubmit={this.validateCaptcha}>
          <input type="text" placeholder="Employee number" name="empno" required />
          <input type="password" placeholder="Password" name="password" required />
          <div className="captcha-container">
            <p id="captcha-question"></p>
            <input type="text" id="captcha-answer" placeholder="Enter answer" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default OfficeLogin;