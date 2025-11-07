import React from "react";  
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import NotFound from "../pages/NotFound";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* rota estática */}
      <Route path="/users" element={<Users />} />

      {/* rota dinâmica com parâmetro :id */}
      <Route path="/users/:id" element={<UserDetail />} />

      {/* redirect /old-about -> /about com feedback
          exemplo simples usando Navigate */}
      <Route path="/old-about" element={<Navigate to="/about" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

