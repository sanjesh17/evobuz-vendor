import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Service from "./pages/Service";
import ManagePage from "./pages/ManagePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<Service />} />
          <Route path="/manage" element={<ManagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
