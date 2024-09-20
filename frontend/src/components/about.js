import React from "react";
import Header from "./header";
// import "./About.css"; // Optional: Create a CSS file for styling

const About = () => {
  return (
    <>
      <Header />
      <div
        className="about-container book-card"
        style={{ margin: "6vw 2vw 2vw 2vw", padding: "2vw" }}
      >
        <h1 style={{ marginLeft: "35vw" }} className="home-heading">
          About Us
        </h1>
        <p
          className="addbook-text"
          style={{ fontSize: "1.2rem", textAlign: "justify" }}
        >
          Welcome to Chapter Chaser, your ultimate destination for book lovers.
          Whether you're searching for the latest bestsellers, timeless
          classics, or hidden literary gems, we're dedicated to bringing you the
          best reading experience. Our online bookstore offers a wide variety of
          genres, from fiction and fantasy to self-help, biographies, and
          academic resources.
        </p>
        <p
          className="addbook-text"
          style={{ textAlign: "justify", fontSize: "1.2rem" }}
        >
          At Chapter Chaser, we believe that every book tells a story, and every
          reader deserves an experience tailored to their tastes. We aim to make
          book shopping as enjoyable and seamless as reading itself.
        </p>
        <h2
          className="home-heading"
          style={{ fontSize: "2rem", alignSelf: "left" }}
        >
          Our Story
        </h2>
        <p
          className="addbook-text"
          style={{ textAlign: "justify", fontSize: "1.2rem" }}
        >
          The idea for Chapter Chaser was conceived in August 2024 during an
          internship focused on web development. As passionate readers and tech
          enthusiasts, our team recognized the need for a streamlined,
          user-friendly platform where readers could discover, purchase, and
          explore books online. Over the course of that summer, we worked
          tirelessly to bring this vision to life using modern web technologies
          like the MERN stack (MongoDB, Express.js, React.js, Node.js).{" "}
          <br></br>
          <br></br>Starting as a college project, Chapter Chaser quickly grew
          into something more. What began as a simple exercise in developing an
          online bookstore has transformed into a platform that continues to
          grow and serve readers. Today, Chapter Chaser remains committed to
          providing an effortless book-shopping experience and fostering a
          community of passionate readers.
        </p>
        <h2
          className="home-heading"
          style={{ fontSize: "2rem", alignSelf: "left" }}
        >
          Our Mission
        </h2>
        <p
          className="addbook-text"
          style={{ textAlign: "justify", fontSize: "1.2rem" }}
        >
          Our mission is simple: to inspire and empower readers by providing
          easy access to a vast collection of books, at the best prices. We aim
          to foster a community where readers can not only purchase books but
          also discover new authors, genres, and recommendations that expand
          their horizons. We also strive to offer a personalized shopping
          experience by curating collections based on reader preferences,
          ensuring that every book you find is one that matches your taste. We
          are committed to making books accessible to everyone, whether through
          affordable prices, special offers, or our personalized recommendation
          system. For us, it’s more than just selling books; it’s about
          encouraging a love for reading that lasts a lifetime.
        </p>
        <h2
          className="home-heading"
          style={{ fontSize: "2rem", alignSelf: "left" }}
        >
          Our Values
        </h2>
        <p
          className="addbook-text"
          style={{ textAlign: "justify", fontSize: "1.2rem" }}
        >
          <b>Passion for Books:</b> Books are at the heart of everything we do.
          We believe in the power of stories to transform lives and broaden
          perspectives.<br></br>
          <br></br>
          <b>Customer Commitment:</b> We put our readers first and are dedicated
          to providing an excellent shopping experience. Innovation: We
          constantly improve our platform to offer new and exciting ways for
          readers to engage with books.
          <br></br>
          <br></br>
          <b>Community:</b> We aim to create a space where readers can connect,
          share recommendations, and be part of a larger literary community.
        </p>
        <h2
          className="home-heading"
          style={{ fontSize: "2rem", alignSelf: "left" }}
        >
          Contact Us
        </h2>
        <p
          className="addbook-text"
          style={{ textAlign: "justify", fontSize: "1.2rem" }}
        >
          Have questions, suggestions, or feedback? We’d love to hear from you.
          Reach out to us at:
          <ul>
            <li>Email: contact@chapterchaser.com</li>
            <li style={{ fontFamily: "timesNewRoman" }}>
              Phone: +91-123456789
            </li>
            <li>Address: Bareilly</li>
          </ul>
          Follow us on social media to stay updated on new releases, special
          offers, and book recommendations.
        </p>
      </div>
    </>
  );
};

export default About;
