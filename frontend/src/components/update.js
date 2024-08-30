import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const [data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: Bearer`${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        data.url === "" ||
        data.title === "" ||
        data.author === "" ||
        data.price === "" ||
        data.desc === "" ||
        data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add-book",
          data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
        navigate(`/book/${id}`);
      }
    } catch (error) {
      alert(error.response.data.message);
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
  }, [id]); // Add id as a dependency to re-fetch data if id changes

  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="url"
          value={data.url}
          onChange={change}
          placeholder="URL"
        />
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={change}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={data.author}
          onChange={change}
          placeholder="Author"
        />
        <input
          type="text"
          name="price"
          value={data.price}
          onChange={change}
          placeholder="Price"
        />
        <textarea
          name="desc"
          value={data.desc}
          onChange={change}
          placeholder="Description"
        />
        <input
          type="text"
          name="language"
          value={data.language}
          onChange={change}
          placeholder="Language"
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
