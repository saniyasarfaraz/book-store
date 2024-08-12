import "./signin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Sign = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      // You can add logic to submit the form data to the backend here
    }
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleSignInClick = () => {
    navigate("/Login"); // Navigate to the sign-in page
  };

  return (
    <div className="body">
      <div className="sign-body">
        <div className="back-arrow" onClick={handleBackClick}>
          <FaArrowAltCircleLeft />
        </div>
        <div className="login-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
            <button className="sign-button" type="submit">
              Sign Up
            </button>
          </form>
          <div className="signup-text">
            <p>
              Already a user?{" "}
              <a className="signup-link" onClick={handleSignInClick}>
                Sign In here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
