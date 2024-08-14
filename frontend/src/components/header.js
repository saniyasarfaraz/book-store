import React, { useState, useEffect } from "react";
import logo from "./logo3.jpg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { FaGripLines, FaArrowLeft, FaUser } from "react-icons/fa";
import favourite from "./header icons/favourite.svg";
import cart from "./header icons/cart.svg";
import Profile from "./profile.png";

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!isNavVisible);
    document.body.style.overflow = isNavVisible ? "auto" : "hidden";
  };

  const handleResize = () => {
    if (window.innerWidth > 991) {
      setNavVisible(false);
      document.body.style.overflow = "auto"; // Enable scroll if window size is greater than 991px
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //states reactredux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("state " + isLoggedIn);

  let flag;
  if (isLoggedIn === false) {
    flag = "false";
  }

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="img not found" style={{ height: "70px" }} />

          <button
            name="line"
            className="lines"
            style={{ color: "#fff5e9", backgroundColor: "none", width: "4vw" }}
            onClick={toggleNavVisibility}
          >
            <FaGripLines />
          </button>

          {/* Hidden Navbar */}
          <div
            className="hidden-nav"
            style={{
              display: isNavVisible ? "flex" : "none",
              visibility: isNavVisible ? "visible" : "hidden",
              backgroundColor: "#4f2c16",
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1000,
              padding: "10px",
              // display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Back Arrow */}
            <Link
              to="/"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#fff5e9",
                fontSize: "24px",
              }}
              onClick={toggleNavVisibility}
            >
              <FaArrowLeft />
            </Link>

            <ul
              className="navbar-nav"
              style={{ paddingLeft: "10px", marginTop: "30px" }}
            >
              <li className="nav-item" style={{ margin: "5px 0" }}>
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "#fff5e9", fontSize: "20px" }}
                  onClick={toggleNavVisibility}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ margin: "5px 0" }}>
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "#fff5e9", fontSize: "20px" }}
                  onClick={toggleNavVisibility}
                >
                  About
                </Link>
              </li>
              <li className="nav-item" style={{ margin: "5px 0" }}>
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "#fff5e9", fontSize: "20px" }}
                  onClick={toggleNavVisibility}
                >
                  Review
                </Link>
              </li>
              <li className="nav-item" style={{ margin: "5px 0" }}>
                <Link
                  className="nav-link"
                  to="/books"
                  style={{ color: "#fff5e9", fontSize: "20px" }}
                  onClick={toggleNavVisibility}
                >
                  Books
                </Link>
              </li>
              <li className="nav-item" style={{ margin: "5px 0" }}>
                <Link
                  to="/favourite"
                  className="nav-link"
                  style={{
                    display: isLoggedIn ? "flex" : "none",
                    color: "#fff5e9",
                    fontSize: "20px",
                  }}
                >
                  <img
                    src={favourite}
                    style={{
                      width: "2.5vw",
                      position: "absolute",
                      top: "2vh",
                      right: "6vw",
                    }}
                  ></img>
                  favourites
                </Link>
              </li>
              <li className="nav-item" style={{ margin: "5px 0" }}>
                <Link
                  to="/cart"
                  className="nav-link"
                  style={{
                    display: isLoggedIn ? "flex" : "none",
                    color: "#fff5e9",
                    fontSize: "20px",
                  }}
                >
                  <img
                    src={cart}
                    style={{
                      width: "2.5vw",
                      position: "absolute",
                      top: "2vh",
                      right: "2vw",
                    }}
                  ></img>
                  cart
                </Link>
              </li>
            </ul>

            {/* Sign In Button at Bottom */}
            <div style={{ borderTop: "1px solid #fff5e9", paddingTop: "10px" }}>
              <Link
                to="/Login"
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: "#c4a27c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FaUser style={{ marginRight: "10px" }} />
                Sign in
              </Link>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "#fff5e9" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "#fff5e9" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "#fff5e9" }}>
                  Review
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/books"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "#fff5e9", background: "none" }}
                >
                  Books
                </Link>
              </li>
            </ul>

            <Link
              to="/Login"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#c4a27c",
                display: isLoggedIn ? "none" : "inline",
                position: "relative",
                right: "3vw",
              }}
            >
              <FaUser style={{ marginRight: "10px", display: "inline" }} />
              Sign in
            </Link>
            <Link
              to="/favourite"
              style={{
                paddingRight: "2vw",
                display: isLoggedIn ? "flex" : "none",
              }}
            >
              <img src={favourite} style={{ height: "2.5vw" }}></img>
            </Link>
            <Link
              to="/cart"
              style={{
                display: isLoggedIn ? "flex" : "none",
              }}
            >
              <img src={cart} style={{ height: "2.5vw" }}></img>
            </Link>
            <Link
              to="/profile"
              style={{
                display: isLoggedIn ? "flex" : "none",
              }}
            >
              <img
                src={Profile}
                style={{ height: "3vw", marginLeft: "3vw" }}
              ></img>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
