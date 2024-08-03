import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/bookdescription";
import Home from "./components/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Bookdescription />
    </div>
  );
}

export default App;
