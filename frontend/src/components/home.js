// import Bookdescription from "./bookdescription";
// import image from "./image.png";
// import { Link } from "react-router-dom";

// const home = ({ scrollToBookCards }) => {
//   return (
//     <div className="main-home">
//       <div className="d-flex flex-row mb-3">
//         <div className="p-2 content-box">
//           <div className="card home">
//             <div className="card-body home-card">
//               <h1 className="card-title home-heading home-text">
//                 Online Book Store
//               </h1>
//               <p className="card-text home-text">
//                 Get Your Favourite Book At Your Doorstep.
//               </p>
//               <button
//                 onClick={scrollToBookCards}
//                 className="btn btn-primary btn-lg"
//               >
//                 Show Books
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="p-2 home-img">
//           <img src={image} alt="background" style={{ maxWidth: "40vw" }}></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default home;
import BookCard from "./BookCard";
import Header from "./header";
import image from "./image.png";
import { Link } from "react-router-dom";
import Books from "./assets/books";
import { useRef } from "react";
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
      <Header scrollToBookCards="scrollToBookCards" />
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
    </>
  );
};

export default Home;
