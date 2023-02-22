import React from "react";
import Blog from "../../../pages/Blog/Blog";
import BlogItem from "./BlogItem/BlogItem";

const BlogList = ({ blogs }) => {
  console.log("socorosso", blogs);
  return (
    <div className="mx-auto grid grid-cols-1 gap-12 md:max-w-3xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
