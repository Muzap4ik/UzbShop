import React from "react";
import Navbar from "../Navbar/Navbar";
import MyFooter from "../Footer/MyFooter";

const MyLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}></div>
      {children}
      <MyFooter />
    </div>
  );
};

export default MyLayout;
