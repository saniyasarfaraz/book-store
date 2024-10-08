import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useSelector } from "react-redux";

const Sidebar = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBackClick = () => {
    navigate("/"); // Navigate to the sign-in page
  };

  const role = useSelector((state) => state.auth.role);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const Logout = () => {
    dispatch(authActions.logout());
    // dispatch(authActions.changeRole("user"));
    localStorage.clear("id");
    localStorage.clear("token");
    localStorage.clear("role");
    navigate("/");
  };
  if (!data) {
    return (
      <div
        className="text-center"
        style={{
          // position: "absolute",
          top: "40vh",
          right: "47vw",
          color: "#f5e1bc",
          display: "none",
        }}
      ></div>
    );
  }

  const username =
    role === "admin" ? `${data.username} (${role})` : `${data.username}`;

  return (
    <>
      {isLoggedIn && (
        <div
          className="sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#4f2c16",
            padding: "10px",
            height: "88vh",
            color: "#fff5e9",
            backgroundColor: "#4f2c16",
            width: "20vw",
            borderRadius: "0.2rem",
          }}
        >
          {/* Back Arrow */}

          <div
            className="user-info"
            style={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              className="back-arrow"
              style={{
                color: "#fff5e9",
                position: "relative",
                left: "-8vw",

                top: "-2vw",
              }}
              onClick={handleBackClick}
            >
              <FaArrowAltCircleLeft />
            </div>
            <img
              src={data.avatar}
              alt="Avatar"
              style={{
                height: "96px",
                width: "96px",
                borderRadius: "50%",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {username}
            </p>
            <p style={{ marginTop: "5px", fontSize: "16px" }}>{data.email}</p>

            {/* Line after email */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#fff5e9",
                marginTop: "16px",
              }}
            ></div>
          </div>

          <div
            // className="nav-links"
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff5e9", // Light brown color for links
            }}
          >
            {isLoggedIn && role === "user" && (
              <Link
                to="/profile"
                className="nav-links"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "18px",
                  color: "#fff5e9 ",
                  textDecoration: "none",
                }}
              >
                Favourites
              </Link>
            )}
            {isLoggedIn && role === "user" && (
              <Link
                to="/profile/orderHistory"
                className="nav-links"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "18px",
                  color: "#fff5e9",
                  textDecoration: "none",
                }}
              >
                Order History
              </Link>
            )}
            {/* {isLoggedIn && role === "user" && (
              <Link
                to="/profile/settings"
                className="nav-links"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "18px",
                  color: " #fff5e9",
                  textDecoration: "none",
                }}
              >
                Settings
              </Link>
            )} */}
            {role === "admin" && (
              <Link
                to="/profile/allorder"
                className="nav-links"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "18px",
                  color: " #fff5e9",
                  textDecoration: "none",
                }}
              >
                All Orders
              </Link>
            )}
            {role === "admin" && (
              <Link
                to="/profile/addbook"
                className="nav-links"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "18px",
                  color: " #fff5e9",
                  textDecoration: "none",
                }}
              >
                Add Book
              </Link>
            )}
          </div>

          {/* Log Out Button */}
          <div
            style={{
              borderTop: "1px solid #fff5e9",
              paddingTop: "10px",
              marginTop: "20px",
            }}
          >
            <button
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#c4a27c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                color: "#fff5e9",
                fontSize: "18px",
              }}
              onClick={Logout}
            >
              <FaUser style={{ marginRight: "10px" }} />
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
