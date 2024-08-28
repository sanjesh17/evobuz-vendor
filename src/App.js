import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Service from "./pages/Service";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import DetailPage from "./pages/DetailPage";
import ProtectedRoute from "./components/protectedroutes/ProtectedRoute";
import ServiceDetailPage from "./pages/ServiceDetailPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Service />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/productdetails/:id"
            element={
              <ProtectedRoute>
                <DetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicedetails/:id"
            element={
              <ProtectedRoute>
                <ServiceDetailPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
