import Bookdescription from "./bookdescription";
import image from "./image.png";
import { Link } from "react-router-dom";

const home = ({ scrollToBookCards }) => {
  return (
    <div className="main-home">
      <div className="d-flex flex-row mb-3">
        <div className="p-2 content-box">
          <div className="card home">
            <div className="card-body home-card">
              <h1 className="card-title home-heading home-text">
                Online Book Store
              </h1>
              <p className="card-text home-text">
                Get Your Favourite Book At Your Doorstep.
              </p>
              <button
                onClick={scrollToBookCards}
                className="btn btn-primary btn-lg"
              >
                Show Books
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 home-img">
          <img src={image} alt="background" style={{ maxWidth: "40vw" }}></img>
        </div>
      </div>
    </div>
  );
};

export default home;
