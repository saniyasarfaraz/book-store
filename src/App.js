import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/Bookdescription";
import Home from "./components/home";
import "./App.css";
import Books from "./components/assets/books";
import BookCard from "./components/BookCard";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Footer from "./components/footer";

function App() {
  const bookCardRef = useRef(null);

  const scrollToBookCards = () => {
    bookCardRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Header scrollToBookCards={scrollToBookCards} />
      <Home scrollToBookCards={scrollToBookCards} />
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
      {Books.map((item, index) => (
        <Bookdescription
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
      <Footer />
    </div>
  );
}
//mera code
// <div className="App">
//   <Header />
//   <Home />
//   <div className="book-container">
//     {Books.map((item) => (
//       <Bookcard
//         img={item.imageSource}
//         title={item.bookName}
//         author={item.author}
//         description={item.description}
//         price={item.price}
//         genre={item.bookGenre}
//       />
//     ))}
//   </div>
//   {/* <Bookdescription img={a} /> */}
// </div>

//chatgpt ka code

//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/books" element={<BookList />} />
//           <Route path="/book/:id" element={<Bookdescription />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// function BookList() {
//   return (
//     <div className="book-container">
//       {Books.map((item, index) => (
//         <Bookcard
//           key={index}
//           id={index}
//           img={item.imageSource}
//           title={item.bookName}
//           author={item.author}
//           description={item.description}
//           price={item.price}
//           genre={item.bookGenre}
//         />
//       ))}
//     </div>
//   );
// }

export default App;

// img={Books[0].imageSource
