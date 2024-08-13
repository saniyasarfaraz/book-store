import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
  };
  const isNotFilled = () => {
    if (formData.username === "" || formData.password === "") {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isNotFilled) {
      try {
        const response = await axios.post(
          "http://localhost:1000/api/v1/sign-up",
          formData
        );
        console.log("Response:", response.data);
        console.log(response.data);
        navigate("/Login");
      } catch (error) {
        console.error(
          "Error during sign-up:",
          error.response?.data?.message || error.message
        );
        setErrors({
          server: error.response?.data?.message || "An error occurred",
        });
      }
    }
  };

  return (
    <div className="body">
      <div className="login-container">
        <div className="back-arrow" onClick={handleBackClick}>
          <FaArrowAltCircleLeft />
        </div>
        <h2 className="sign-h2">Sign in</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="btn btn-primary sign-button"
            type="submit"
            onClick={handleSubmit}
            disabled={isNotFilled}
          >
            Sign in
          </button>
        </form>
        <p className="signup-text">
          Do not have an account?{" "}
          <Link to="/Sign" className="signup-link">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
