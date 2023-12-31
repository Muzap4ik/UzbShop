import React from "react";
import "./MyFooter.css";

const MyFooter = () => {
  return (
    <div className="myFooter-container">
      <div className="footer-disclaimer">
        <p>(C) Copyright</p>
      </div>
      <div className="footer-contacts">
        <ul>
          <li>+998 93 174 35 37</li>
          <li>+998 33 767 35 37</li>
        </ul>
      </div>
      <div className="footer-contacts">
        <ul>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Telegram</li>
        </ul>
      </div>
    </div>
  );
};

export default MyFooter;
