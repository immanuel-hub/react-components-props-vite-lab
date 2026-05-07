import React from "react";

/**
 * Header component - displays the blog name in a <header> element.
 * Connected to: App (parent)
 * Props: name (string) - the blog title
 */
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
