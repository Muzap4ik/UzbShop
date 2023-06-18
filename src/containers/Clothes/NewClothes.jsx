import React from "react";
import "./NewClothes.css";
import imgNum1 from "../../images/kiyim_kulrang.webp";
import imgNum2 from "../../images/kiyim_qizil.webp";
import imgNum3 from "../../images/kiyim_kok_qiz.webp";
import imgNum4 from "../../images/kiyim_kulrang_bola.webp";

const NewClothes = () => {
  return (
    <div className="clothes-container">
      <div className="CardHolder">
        <div className="Card">
          <img src={imgNum1} alt="pics" />
          <div className="textSection">
            <h1>Kulrang Tolstovka Qiz</h1>
            <button id="btn-buy">400.00 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img src={imgNum2} alt="pics" />
          <div className="textSection">
            <h1>Qizil Tolstovka Bola</h1>
            <button id="btn-buy">400.00 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img src={imgNum3} alt="pics" />
          <div className="textSection">
            <h1>Ko'k Tolstovka Qiz</h1>
            <button id="btn-buy">400.00 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img src={imgNum4} alt="pics" />
          <div className="textSection">
            <h1>Kulrang Tolstovka Bola</h1>
            <button id="btn-buy">400.00 so'm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClothes;
