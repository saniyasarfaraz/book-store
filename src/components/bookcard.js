import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/book/${props.id}`);
  };

  return (
    <div>
      <div
        className="card book-card multiple-cards"
        style={{ width: "17rem", height: "38rem" }}
      >
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{ height: "22rem", padding: "0.5rem" }}
        ></img>
        <div className="card-body">
          <h3
            className="card-title"
            style={{ fontWeight: "bold", height: "4rem" }}
          >
            {props.title}
          </h3>
          <p className="card-text fst-italic">Author: {props.author}</p>
          <p style={{ position: "relative", top: "-1rem" }}>
            genre: {props.genre}
          </p>
          <p className="fs-3" style={{ position: "absolute", bottom: "3rem" }}>
            ₹ {props.price}.00
          </p>
          <Link
            to={`/Bookdesciption/${props.id}`}
            className="btn btn-primary"
            style={{ position: "absolute", bottom: "1rem", width: "88%" }}
            onClick={handleBuyClick}
            description={props.Description}
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
