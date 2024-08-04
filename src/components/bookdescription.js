function bookdescription(props) {
  return (
    <>
      <div
        class="card mb-3 book-card"
        style={{
          maxWidth: "90vw",
          minHeight: "90vh",
          margin: "auto",
          marginTop: "5vh",
        }}
      >
        <div class="row g-0 ">
          <div className="col-md-6 ">
            <img
              src={props.img}
              className="img-fluid rounded-start book-img"
              alt="a book"
            ></img>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a
                naturallead-in to additional content. This content is a little
                bitlonger.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
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
