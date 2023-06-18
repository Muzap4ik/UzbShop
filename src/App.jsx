import React from "react";
import "../src/App.css";
import "../src/index.js";
import Navbar from "./components/Navbar/Navbar";
import CardHolder from "./components/CardHolder/CardHolder";
import MyFooter from "./components/Footer/MyFooter";
function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <CardHolder/>
      <MyFooter/>
    </div>
  );
}
export default App;
