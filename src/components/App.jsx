import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

/**
 * App component - root of the component tree.
 * Imports blog data and passes it down as props to:
 *   Header, About, ArticleList
 */
function App() {
  const { name, image, about, posts } = blogData;
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
