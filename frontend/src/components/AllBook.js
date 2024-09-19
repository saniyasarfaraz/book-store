import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import Header from "./header";

const Recentbooks = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-all-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);
  console.log(Data);
  return (
    <>
      <Header />
      <div className="book-container " style={{ marginTop: "6vw" }}>
        {Data &&
          Data.map((item, index) => (
            <BookCard
              key={index}
              id={item._id}
              img={item.imageSource}
              title={item.bookName}
              author={item.author}
              genre={item.bookGenre}
              price={item.price}
            />
          ))}
      </div>
    </>
  );
};

export default Recentbooks;
