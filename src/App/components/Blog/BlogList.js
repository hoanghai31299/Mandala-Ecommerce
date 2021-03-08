import React from "react";
import BlogListItem from "./BlogListItem";

function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((b) => (
        <BlogListItem blog={b} />
      ))}
    </div>
  );
}

export default BlogList;
