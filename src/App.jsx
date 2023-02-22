//termina ate Sexta
//usar tailwind
//Ter 2 paginas, a Homepage e a pagina de criar um post

import React, { useState } from "react";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className=" max-xl my-0 mx-auto w-11/12 py-4 px-0">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
