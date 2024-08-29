import { useState } from "react";
import axios from "axios";
const AddBook = () => {
  const [image, setImage] = useState("");
  console.log(image, 12);

  const [Data, setData] = useState({
    bookName: "",
    author: "",
    imageSource: "",
    bookGenre: "",
    price: "",
    pages: "",
    Bookdescription: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.bookName === "" ||
        Data.author === "" ||
        Data.imageSource === "" ||
        Data.bookGenre === "" ||
        Data.price === "" ||
        Data.pages === "" ||
        Data.Bookdescription === ""
      ) {
        alert("Please fill all the fields");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add-book",
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
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div
      className="cards book-card"
      style={{ marginTop: "5.5vw", height: "100%" }}
    >
      <h2 style={{ fontSize: "2rem" }} className=" home-text home-heading">
        Add Book
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
            style={{ display: "inline-block", width: "49%", marginRight: "2%" }}
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
            style={{ display: "inline-block", width: "49%", marginRight: "2%" }}
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
          Add book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
