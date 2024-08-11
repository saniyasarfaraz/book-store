import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Sign from "./components/Sign";
import Login from "./components/Login";



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <BrowserRouter>

<Routes>
          <Route path="/sign" element={<Sign/>} /> 
          <Route path ="/" element={<App/> } />
          <Route path="/Login" element={<Login/>} /> 

      </Routes> 
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById("root")
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
