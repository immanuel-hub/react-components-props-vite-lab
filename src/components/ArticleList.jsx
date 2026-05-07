import React from "react";
import Article from "./Article";

/**
 * ArticleList component - renders a list of Article components inside a <main> element.
 * Connected to: App (parent), Article (child)
 * Props:
 *   posts (array) - array of post objects passed down from App
 */
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
