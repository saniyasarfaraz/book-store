import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "axios";
import { authActions } from "../components/store/auth";
import { useDispatch } from "react-redux";
import Header from "./header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    navigate("/");
  };

  const isNotFilled = () => {
    return formData.username === "" || formData.password === "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNotFilled()) {
      try {
        const response = await axios.post(
          "http://localhost:1000/api/v1/sign-in",
          formData
        );

        const { id, token, role } = response.data;

        // Save login data in localStorage
        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        // Dispatch the login action
        dispatch(authActions.login({ role }));
        dispatch(authActions.changeRole(role));

        navigate("/"); // Redirect to dashboard after successful login
      } catch (error) {
        alert(error.response?.data?.message || "An error occurred");
        setErrors({
          server: error.response?.data?.message || "An error occurred",
        });
      }
    } else {
      setErrors({
        form: "Please fill out all fields",
      });
    }
  };

  return (
    <div className="body">
      <Header />
      <div className="login-container">
        <div className="back-arrow" onClick={handleBackClick}>
          <FaArrowAltCircleLeft />
        </div>
        <h2 className="sign-h2">Sign in</h2>
        <form onSubmit={handleSubmit}>
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
          {errors.form && <p className="error">{errors.form}</p>}
          {errors.server && <p className="error">{errors.server}</p>}
          <button
            className="btn btn-primary sign-button"
            type="submit"
            disabled={isNotFilled()}
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
};

export default Login;
