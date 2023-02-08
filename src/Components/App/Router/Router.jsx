import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../Pages/About";
import { Contact } from "../../Pages/Contact";
import Home from "../../Pages/Home/Home";
import { Products } from "../../Pages/Products";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Router;
