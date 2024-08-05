import { useParams } from "react-router-dom";
import Books from "./assets/books";

const Bookdescription = (props) => {
  // const { id } = useParams();
  // const book = Books[id];
  return (
    <>
      <div
        className="card mb-3 book-card"
        style={{
          minWidth: "80vw",
          maxWidth: "90vw",
          minHeight: "90vh",
          margin: "auto",
          marginTop: "5vh",
        }}
      >
        <div className="row g-0 ">
          <div className="col-md-6">
            <img
              src={props.img}
              className="img-fluid rounded-start book-img"
              alt="a book"
              style={{
                margin: "2rem",
                marginLeft: "5vw",

                maxHeight: "85vh",
              }}
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">{props.title}</h1>
              <p className="card-text text-body-secondary ">
                Author: {props.author}
              </p>
              <p className="card-text fs-4" style={{ textAlign: "justify" }}>
                <br></br>
                <strong>Description:</strong> {props.description}
              </p>
              <p className="card-text fs-5 ">Pages: {props.pages}</p>
              <p className="card-text fs-5 ">Genre: {props.genre}</p>
              <p
                className="card-text  fs-3"
                style={{ position: "absolute", bottom: "10rem" }}
              >
                Price: ₹ {props.price}.00
              </p>
              <button
                className="btn btn-primary btn-lg"
                style={{ position: "absolute", bottom: "4rem", width: "6vw" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookdescription;
