// // import React from 'react'

// import React, { useState } from "react";
// // import './Login.css'; // Optional: for custom styling

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // You can add your authentication logic here
//     console.log("Username:", username);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="login-container">
//       <h2>Sign in</h2>
//       <form onSubmit={handleLogin}>
//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <br></br>
//         <button
//           className="btn btn-primary btn-lg "
//           style={{ width: "100%" }}
//           type="submit"
//         >
//           Sign in
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleBackClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary sign-button" type="submit">
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
