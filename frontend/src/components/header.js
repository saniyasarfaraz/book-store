import logo from "./logo3.jpg";
// import logo from "./l.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img src={logo} alt="img not found" style={{ height: "70px " }} />
          {/* <span className="navbar-toggler-icon"></span>
           */}
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
              to="/Sign"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#c2a279",
                position: "relative",
                right: "3vw",
              }}
            >
              Sign in
            </Link>

            <Link
              to="/Login"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#c2a279",
                position: "relative",
                right: "1vw",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
