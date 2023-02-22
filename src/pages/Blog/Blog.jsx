import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../../components/common/EmptyList";
import { postList } from "../../config/data";
import Chip from "../../components/Chip/Chip";

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let post = postList.find((post) => post.id === parseInt(id));

    if (post) {
      setPost(post);
    }
  }, []);

  return (
    <div className="mx-auto grid grid-cols-1 gap-12 md:max-w-3xl md:grid-cols-1 lg:max-w-5xl lg:grid-cols-1 ">
      <div className="flex justify-between">
        <span className="text-3xl font-bold text-sky-300">MedBlog</span>

        <Link
          className="flex w-fit items-center gap-2 rounded-lg bg-slate-300 py-2 px-4"
          to="/"
        >
          <span className="text-sm font-medium font-bold text-stone-700 no-underline">
            &#8592;
          </span>
          Go Back
        </Link>
      </div>

      {post ? (
        <div className="">
          <header>
            <p className="font-2xl font-bold">Published {post.createdAt}</p>
            <h3 className="font-2xl font-bold">{post.title}</h3>
            <div className="m-2 flex gap-4 ">
              {post.subCategory.map((category, index) => (
                <div className=" flex gap-4">
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <img className="rounded-lg" src={post.cover} alt="cover" />
          <div className="p-4 ">
            <p>{post.description}</p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
