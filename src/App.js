import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/bookdescription";
import Home from "./components/home";
import "./App.css";
import Books from "./components/assets/books";
import a from "./components/assets/Dune.jpg";

function App() {
  console.log(Books[0].bookName);
  return (
    <div className="App">
      <Home />
      <Bookdescription img={a} />
    </div>
  );
}

export default App;

// img={Books[0].imageSource
