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
import Signin from "./components/signin";
import Cart from "./components/cart";
import Favourite from "./components/profile/Favourite";
import Allbook from "./components/AllBook";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/profile/Sidebar";
import OrderHistory from "./components/profile/orderHistory";
import Settings from "./components/profile/settings";
import AddBook from "./components/profile/AddBook";
import AllOrder from "./components/profile/AllOrders";

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
        <Route path="/books" element={<Allbook />} />
        <Route path="/Bookdescription/:id" element={<Bookdescription />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/Login" element={<Signin />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Favourite />} />
          <Route path="/profile/orderHistory" element={<OrderHistory />} />
          <Route path="/profile/settings" element={<Settings />} />
          <Route index element={<AllOrder />} />
          <Route path="/profile/addbook" element={<AddBook />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
