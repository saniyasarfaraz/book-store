const bookcard = (props) => {
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
          <button
            href="#"
            className="btn btn-primary btn "
            style={{ position: "absolute", bottom: "1rem", width: "88%" }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default bookcard;
