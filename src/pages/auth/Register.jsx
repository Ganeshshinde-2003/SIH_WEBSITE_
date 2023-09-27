import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory
import "../../App.css";
import { useAuth } from "../../components/AuthContext";
import { toast } from "react-toastify";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); 

  const handleLogin = () => {
    login();
    toast.success("Register Successful");
    navigate("/");
  };

  return (
    <div className="registration-container" style={{ height: "90vh" }}>
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form>
          <input
            className="registration-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <input
            className="registration-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@gmail.com"
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
          <select
            className="registration-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="publisher">Publisher</option>
            <option value="reviewer">Content Anaylist</option>
            <option value="reviewer">Translater</option>

          </select>
          <button
            className="registration-button"
            type="button" // Use type="button" to prevent form submission
            onClick={handleLogin} // Call handleLogin on button click
          >
            Register
          </button>
          <span>
            Already have an account?{" "}
            <Link className="sign-up" to="/login">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
