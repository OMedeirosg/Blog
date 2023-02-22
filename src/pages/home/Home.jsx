import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList/BlogList";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import { postList } from "../../config/data";

const Home = () => {
  const [posts, setPosts] = useState(postList);
  const [searchKey, setSearchKey] = useState("");

  // Search Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterPostsByCategory();
  };

  // Filter posts by category
  const filterPostsByCategory = () => {
    const filteredPosts = posts.filter((post) =>
      post.category
        .toLocaleLowerCase()
        .includes(searchKey.toLocaleLowerCase().trim())
    );

    setPosts(filteredPosts);
  };

  const handleClearSearch = () => {
    setPosts(postList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* {Search Bar }  */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* { Blog List & Empty List}  */}
      {!posts.length ? <EmptyList /> : <BlogList blogs={posts} />}
    </div>
  );
};

export default Home;
