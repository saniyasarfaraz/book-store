import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./header";

const UpdateBook = () => {
  const [Data, setData] = useState({
    bookName: "",
    author: "",
    imageSource: "",
    bookGenre: "",
    price: "",
    pages: "",
    Bookdescription: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };
  console.log(id);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.imageSource === "" ||
        Data.bookName === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.Bookdescription === "" ||
        Data.bookGenre === "" ||
        Data.pages === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.put(
          "http://localhost:1000/api/v1/update-book",
          Data,
          { headers }
        );
        setData({
          bookName: "",
          author: "",
          imageSource: "",
          bookGenre: "",
          price: "",
          pages: "",
          Bookdescription: "",
        });
        alert(response.data.message);
        navigate(`/Bookdescription/${id}`);
      }
    } catch (error) {
      alert(error.response.data.message);
      navigate(`/Bookdescription/${id}`);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      setData(response.data.data);
    };
    fetch();
  }, []); // Add id as a dependency to re-fetch data if id changes

  return (
    <>
      <Header />
      <div
        className="cards book-card"
        style={{ marginTop: "5.5vw", height: "100%" }}
      >
        <h2 style={{ fontSize: "2rem" }} className=" home-text home-heading">
          Update Book
        </h2>
        <div style={{ padding: "2rem", paddingTop: 0 }}>
          <div>
            <label
              style={{ display: "inline-block" }}
              for="imageSource"
              className="addbook-text"
            >
              Image :
            </label>
            <input
              name="imageSource"
              onChange={change}
              value={Data.imageSource}
              type="text"
              // onChange={(e) => setImage(e.target.files)}
              // type="file"
            ></input>
          </div>
          <div>
            <label
              style={{ display: "inline-block" }}
              for="bookName"
              className="addbook-text"
            >
              Book Name:
            </label>
            <input
              name="bookName"
              onChange={change}
              value={Data.bookName}
              type="text"
              placeholder="Book name"
              required
            ></input>
          </div>
          <div>
            <div
              style={{
                display: "inline-block",
                width: "49%",
                marginRight: "2%",
              }}
            >
              <label
                style={{ display: "inline-block" }}
                for="author"
                className="addbook-text"
                required
              >
                Author:
              </label>
              <input
                name="author"
                onChange={change}
                value={Data.author}
                type="text"
                placeholder="Author"
                required
              ></input>
            </div>
            <div style={{ display: "inline-block", width: "49%" }}>
              <label
                style={{ display: "inline-block" }}
                for="bookGenre"
                className="addbook-text"
              >
                Book Genre:
              </label>
              <input
                name="bookGenre"
                onChange={change}
                value={Data.bookGenre}
                type="text"
                placeholder="Book Genre"
                required
              ></input>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "inline-block",
                width: "49%",
                marginRight: "2%",
              }}
            >
              <label
                style={{ display: "inline-block" }}
                for="price"
                className="addbook-text"
              >
                Price :
              </label>
              <input
                name="price"
                onChange={change}
                value={Data.price}
                type="text"
                placeholder="Price"
                required
              ></input>
            </div>
            <div style={{ display: "inline-block", width: "49%" }}>
              <label
                style={{ display: "inline-block" }}
                for="pages"
                className="addbook-text"
              >
                Pages :
              </label>
              <input
                name="pages"
                onChange={change}
                value={Data.pages}
                type="text"
                placeholder="Pages"
                required
              ></input>
            </div>
          </div>
          <div style={{ display: "inline-block", width: "100%" }}>
            <label
              style={{ display: "inline-block" }}
              for="Bookdescription"
              className="addbook-text"
            >
              Book Desciption
            </label>
            <textarea
              required
              name="Bookdescription"
              onChange={change}
              value={Data.Bookdescription}
              style={{ width: "100%" }}
              // type="textarea"
              placeholder="Book Desciption"
            ></textarea>
          </div>

          <button
            className="btn btn-primary sign-button"
            type="submit"
            onClick={submit}
            style={{ width: "20%", marginLeft: 0, marginTop: "1rem" }}
          >
            Update book
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
