import React from "react";
import "../src/App.css";
import "../src/index.js";
import Navbar from "./components/Navbar/Navbar";
import CardHolder from "./containers/HomePage/HomePage";
import MyFooter from "./components/Footer/MyFooter";
import MyLayout from "./components/Layout/myLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/containers/HomePage/HomePage"
import LoginPage from "./containers/LoginPage/LoginPage";

function App() {
  return (
    <div className="main-container">
      <MyLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </MyLayout>
    </div>
  );
}
export default App;
