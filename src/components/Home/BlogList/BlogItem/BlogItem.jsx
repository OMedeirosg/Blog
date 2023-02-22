import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../Chip/Chip";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    cover,
    authorAvatar,
    category,
  },
}) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={cover}
        alt={title}
        className="mb-2
        h-60 w-full rounded-2xl object-cover
      "
      />
      <Chip label={category} />
      <h3 className="font-2xl font-bold">{title}</h3>
      <footer className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={authorAvatar}
              alt="avatar"
            />
            <p className="text-sm">{authorName}</p>
          </div>

          <Link to={`/blog/${id}`}>
            <span className="text-2xl">➝</span>
          </Link>
        </div>
        <p className="text-sm italic">{createdAt}</p>
      </footer>
    </div>
  );
};

export default BlogItem;
