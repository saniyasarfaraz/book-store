import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/bookdescription";
import Home from "./components/home";
import "./App.css";
import Books from "./components/assets/books";
import Bookcard from "./components/bookcard";
// import a from "./components/assets/Dune.jpg";

function App() {
  console.log(Books[0].imageSource);
  return (
    <div className="App">
      <Home />
      <div className="book-container">
        {Books.map((item) => (
          <Bookcard
            img={item.imageSource}
            title={item.bookName}
            author={item.author}
            description={item.description}
            price={item.price}
            genre={item.bookGenre}
          />
        ))}
      </div>
      {/* <Bookdescription img={a} /> */}
    </div>
  );
}

export default App;

// img={Books[0].imageSource
