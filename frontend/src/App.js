import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/bookdescription";
import Home from "./components/home";
import "./App.css";
import Books from "./components/assets/books";
import BookCard from "./components/BookCard";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sign from "./components/Sign";
import Login from "./components/Login";
// import Footer from "./components/footer";

function App() {
  const [bookList, setBookList] = useState(Books);
  function BookList({ bookList }) {
    return (
      <div className="book-container">
        {bookList.map((item, index) => (
          <BookCard
            key={index}
            id={index}
            img={item.imageSource}
            title={item.bookName}
            author={item.author}
            genre={item.bookGenre}
            price={item.price}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList bookList={bookList} />} />
        <Route
          path="/Bookdescription/:id"
          element={<Bookdescription bookList={bookList} />}
        />
        <Route path="/sign" element={<Sign />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
