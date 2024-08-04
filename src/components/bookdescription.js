function bookdescription(props) {
  return (
    <>
      <div
        className="card mb-3 book-card"
        style={{
          maxWidth: "90vw",
          minHeight: "90vh",
          margin: "auto",
          marginTop: "5vh",
        }}
      >
        <div className="row g-0 ">
          <div className="col-md-4 ">
            <img
              src={props.img}
              className="img-fluid rounded-start book-img"
              alt="a book"
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a
                naturallead-in to additional content. This content is a little
                bitlonger.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default bookdescription;
