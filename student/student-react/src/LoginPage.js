import React from "react";
import styles from "./LoginPage.module.css";
import logo from "./bin/vit_logo_colored.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.captchaText = ""; // Captcha value stored as a class property
  }

  // Function to generate a new captcha
  generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.captchaText = captcha; // Store the generated captcha
    document.getElementById("captchaText").textContent = captcha; // Update the DOM
  };

  // Function to validate the captcha
  validateCaptcha = (e) => {
    e.preventDefault();
    const captchaInput = document.getElementById("captcha").value;

    if (captchaInput !== this.captchaText) {
      alert("Captcha does not match. Please try again.");
      this.generateCaptcha(); // Generate a new captcha
      document.getElementById("captcha").value = ""; // Clear the input field
      return false;
    }

    // Navigate to the student dashboard
    alert("Login successful!");
    window.location.href = "studentDashboard.html";
  };

  // Generate captcha when the component is mounted
  componentDidMount() {
    this.generateCaptcha();
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.heading}>Student Login</h2>
        <form onSubmit={this.validateCaptcha}>
          <label htmlFor="username">Registration Number:</label>
          <input type="text" id="username" name="username" required className={styles.input} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required className={styles.input} />

          <div className={styles.captchaText}>
            <span id="captchaText"></span>
            <button
              type="button"
              onClick={this.generateCaptcha}
              className={styles.captchaButton}
            >
              Refresh
            </button>
          </div>

          <div>
            <label htmlFor="captcha">Captcha:&nbsp;</label>
            <input
              type="text"
              id="captcha"
              name="captcha"
              required
              maxLength="6"
              className={styles.input}
            />
          </div>

          <input type="submit" value="Login" className={styles.submitButton} />
        </form>
        <footer className={styles.footer}>
          If You are Hostel Supervisor, Please follow the below link
          <br />
          <br />
          <a href="../office/login.html">Hostel Login</a>
        </footer>
      </div>
    );
  }
}

export default LoginPage;