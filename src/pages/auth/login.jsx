import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory
import "../../App.css";
import { useAuth } from "../../components/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useHistory

  const handleLogin = () => {
    login();
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="registration-container" style={{ height: "70vh" }}>
      <div className="registration-form">
        <h2>Login Form</h2>
        <form>
          <input
            className="registration-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="registration-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
          />
          <button
            className="registration-button"
            type="button" // Use type="button" to prevent form submission
            onClick={handleLogin} // Call handleLogin on button click
          >
            Log In
          </button>
          <span>
            Don't have an account?{" "}
            <Link className="sign-up" to="/register">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
