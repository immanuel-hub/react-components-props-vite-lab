import React from "react";

/**
 * About component - displays the blog logo and description in an <aside> element.
 * Connected to: App (parent)
 * Props:
 *   image (string) - URL for the blog logo; defaults to placeholder if omitted
 *   about (string) - short description of the blog
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
