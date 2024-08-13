import BookCard from "./BookCard";
import Header from "./header";
import image from "./image.png";
import Books from "./assets/books";
import { useRef } from "react";
import Recentbooks from "./Recentbooks";
import Footer from "./footer";
const Home = () => {
  const bookCardRef = useRef(null);

  const scrollToBookCards = () => {
    console.log(bookCardRef);
    if (bookCardRef.current) {
      bookCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <div className="main-home">
        <div className="d-flex flex-row mb-3">
          <div className="p-2">
            <div
              className="card home"
              style={{ border: "none", minWidth: "50vw", minHeight: "98vh" }}
            >
              <div className="card-body home-card">
                <h1 className="card-title home-heading home-text">
                  Online Book Store
                </h1>
                <p className="card-text home-text">
                  Get Your Favourite Book At Your Doorstep.
                </p>
                {/* <Link to="/books"> */}
                <button
                  onClick={scrollToBookCards}
                  className="btn btn-primary btn-lg"
                >
                  Show Books
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="p-2">
            <img
              src={image}
              alt="background"
              style={{ maxWidth: "40vw" }}
            ></img>
          </div>
        </div>
      </div>
      <div ref={bookCardRef} className="book-container">
        {Books.map((item, index) => (
          <BookCard
            key={index}
            id={index}
            img={item.imageSource}
            title={item.bookName}
            author={item.author}
            description={item.Bookdescription}
            price={item.price}
            genre={item.bookGenre}
            pages={item.pages}
          />
        ))}
      </div>
      <Recentbooks />
      <Footer />
    </>
  );
};

export default Home;
