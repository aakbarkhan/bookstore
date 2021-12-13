import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./redux/books/books";
import Categories from "./redux/categories/categories";
import Nav from "./components/nav";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
