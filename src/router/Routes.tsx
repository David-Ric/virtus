import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";

interface IApplicationProps {
  // Defina aqui os tipos para as props, se necessário
}

const Router: React.FC<IApplicationProps> = () => {
  // Use as props conforme necessário

  return (
     <BrowserRouter basename="/virtus">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
