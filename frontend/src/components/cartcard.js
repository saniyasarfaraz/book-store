import { Link } from "react-router-dom";
import axios from "axios";

const Cartcard = (props) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: props.id,
  };

  const handleRemove = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1000/api/v1/remove-from-cart/${props.id}`,
        {},
        { headers }
      );
      alert(response.data.message);
      props.refreshCart(); // Re-fetch the cart after removal
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div style={{ marginBottom: "0" }}>
      <div
        className="card  "
        style={{
          minWidth: "60vw",
          borderRadius: 0,
          borderCollapse: "collapse",
          maxWidth: "99vw",
          minHeight: "20vh",
          maxHeight: "45vh",
          border: "0.5px solid #3e362e40",
          backgroundColor: "#f5e1bc9e",
          margin: 0,
        }}
      >
        <div className="row g-0 book-card" style={{}}>
          <div
            className="col-md-2 "
            style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
          >
            <img
              src={props.img}
              className="img-fluid  book-img"
              alt="a book"
              style={{
                height: "35vh",
                maxHeight: "39vh",
                padding: "0.5rem",
              }}
            ></img>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h4 className="card-text">{props.title}</h4>
              <div style={{ display: "flex", width: "100%" }}>
                <div style={{ display: "inline-block", width: "50%" }}>
                  <p className="card-text text-body-secondary ">
                    Author: {props.author}
                  </p>

                  <p className="card-text  " style={{ fontSize: "1rem" }}>
                    Genre: {props.genre}
                  </p>
                </div>
                <div>
                  <p
                    className="card-text  fs-5"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    Price: ₹ {props.price}.00
                  </p>
                </div>
              </div>
              <div className="button-box" style={{ width: "50%" }}>
                <Link
                  to={`/Bookdescription/${props.id}`}
                  className="btn small-btn btn-primary decription-button"
                  style={{
                    width: "100%",
                  }}
                >
                  <div className="fav-text">View Details</div>
                </Link>
                <button
                  className=" btn small-btn btn-primary btn-lg cart-button"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: " center",
                    justifyContent: "center",
                  }}
                  onClick={handleRemove}
                >
                  <div className="fav-text">Remove</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
