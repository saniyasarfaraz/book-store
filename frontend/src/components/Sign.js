import "./signin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "axios";

const Sign = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.username) {
      errors.username = "Username is required*";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required*";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required*";
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    if (!formData.address) {
      errors.address = "Address is required*";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:1000/api/v1/sign-up",
          formData
        );
        console.log("Response:", response.data);

        navigate("/Login");
      } catch (error) {
        alert(error.response?.data?.message || error.message);
        setErrors({
          server: error.response?.data?.message || "An error occurred",
        });
      }
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
      <div className="sign-body" style={{ width: "100vw" }}>
        <div className="login-container">
          <div className="back-arrow" onClick={handleBackClick}>
            <FaArrowAltCircleLeft />
          </div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="error name-error">{errors.username}</p>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="error email-error">{errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="error password-error">{errors.password}</p>
              )}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error confirm-error">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                style={{ width: "100%" }}
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <p className="address-error error">{errors.address}</p>
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
