import React from "react";

/**
 * Article component - displays a single blog post inside an <article> element.
 * Connected to: ArticleList (parent)
 * Props:
 *   title   (string) - article title
 *   date    (string) - publish date; defaults to "January 1, 1970" if omitted
 *   preview (string) - short preview text
 *   minutes (number) - estimated reading time (used for emoji indicator)
 */
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getReadIndicator(mins) {
    if (!mins) return null;
    if (mins < 30) {
      const cups = Math.ceil(mins / 5);
      return `${"☕️".repeat(cups)} ${mins} min read`;
    }
    const boxes = Math.ceil(mins / 10);
    return `${"🍱".repeat(boxes)} ${mins} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <small> · {getReadIndicator(minutes)}</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
