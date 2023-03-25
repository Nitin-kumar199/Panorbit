import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "../Pages/Gallery";
import HomePage from "../Pages/HomePage";
import LandingPage from "../Pages/LandingPage";
import Posts from "../Pages/Posts";
import Todo from "../Pages/Todo";

const AllRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="homepage/:id" element={<HomePage />} />
      <Route path="post" element={<Posts />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="todo" element={<Todo />} />
    </Routes>
  );
};

export default AllRouters;
