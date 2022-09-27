import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  const MIN_CHAR = 140;
  const [error, setError] = useState(false);
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < MIN_CHAR) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafp" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères.</p>}
        <input type="submit" value="Envoyer" />
      </form>

      <ul></ul>
    </div>
  );
};

export default Blog;
