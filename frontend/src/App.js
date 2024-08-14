import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/bookdescription";
import Home from "./components/home";
import "./App.css";
import Books from "./components/assets/books";
import BookCard from "./components/BookCard";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Sign from "./components/Sign";
import Signin from "./components/signin";
import Cart from "./components/cart";
import Favourite from "./components/Favourite";
import Allbook from "./components/AllBook";
import Profile from "./components/Profile";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

// library.add(faShoppingCart, faHeart);

// import "./components/signin.css";

// import Footer from "./components/footer";

function App() {
  const [bookList, setBookList] = useState(Books);
  function BookList({ bookList }) {
    return (
      <div className="book-container">
        <Header />
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
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList bookList={bookList} />} /> */}
        <Route path="/books" element={<BookList />} />
        <Route
          path="/Bookdescription/:id"
          element={<Bookdescription bookList={bookList} />}
        />
        <Route path="/sign" element={<Sign />} />
        <Route path="/Login" element={<Signin />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Favourite />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
