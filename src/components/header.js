import logo from "./logo.png";
import { Link } from "react-router-dom";
const Navbar = (scrollToBookCards) => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {<img src={logo} alt="img not found" height={70} />}
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "#fff5e9" }}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="" style={{ color: "#fff5e9" }}>
                  Review
                </a>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "#fff5e9", background: "none" }}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   scrollToBookCards();
                  // }}
                >
                  Books
                </button>
              </li>
            </ul>

            <Link
              to="/"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#c2a279",
                position: "relative",
                right: "3vw",
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
