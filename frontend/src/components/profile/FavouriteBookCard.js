import { Link } from "react-router-dom";
import axios from "axios";

const FavouriteBookCard = (props) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: props.id,
  };

  const handleRemove = async () => {
    try {
      const response = await axios.put(
        "http://localhost:1000/api/v1/remove-book-from-favourite",
        {},
        { headers }
      );
      alert(response.data.message);
      props.onRemove(props.id); // Notify parent component to update state
    } catch (error) {
      console.error("Error removing book from favourites:", error);
    }
  };

  return (
    <div>
      <div
        className="card book-card fav-cards"
        style={{ border: "1px solid #3E362E" }}
      >
        <img
          src={props.img}
          style={{
            width: "10rem",
            margin: "auto",
            marginTop: "1vw",
            marginBottom: "1vw",
          }}
          alt="..."
        ></img>
        <div className="card-body" style={{ borderTop: "1px solid #3E362E" }}>
          <h3
            className="card-title"
            style={{ fontWeight: "bold", height: "4rem" }}
          >
            {props.title}
          </h3>
          <p className="card-text fst-italic">Author: {props.author}</p>
          <p style={{ position: "relative", top: "-1.2rem", margin: "0" }}>
            Genre: {props.genre}
          </p>
          <p className="fs-3" style={{ margin: "0" }}>
            ₹ {props.price}.00
          </p>
          <div className="button-box">
            <Link
              to={`/Bookdescription/${props.id}`}
              className="btn small-btn btn-primary decription-button"
              style={{
                width: "100%",
                padding: "auto",
              }}
            >
              <div className="fav-text">View Details</div>
            </Link>
            <button
              className=" btn small-btn btn-primary btn-lg cart-button"
              style={{
                width: "100%",
                padding: "auto",
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
  );
};

export default FavouriteBookCard;
