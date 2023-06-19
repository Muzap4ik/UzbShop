import React from "react";
import "./NewClothes.css";
import imgNum1 from "../../images/kiyim_kulrang.webp";
import imgNum2 from "../../images/kiyim_qizil.webp";
import imgNum3 from "../../images/kiyim_kok_qiz.webp";
import imgNum4 from "../../images/kiyim_kulrang_bola.webp";
import imgNum5 from "../../images/qora_futbolka_bola.webp";
import imgNum6 from "../../images/yashil_futbolka_bola.webp";
import imgNum7 from "../../images/oq_futbolka_qiz.webp";
import imgNum8 from "../../images/qora_futbolka_qiz.webp";
import imgNum9 from "../../images/kepka_odamrang.webp";
import imgNum10 from "../../images/kepka_yashil.webp";
import imgNum11 from "../../images/kepka_qora.webp";
import imgNum12 from "../../images/kepka_kulrang.webp";

const NewClothes = () => {
  return (
    <div className="clothes-container">
      <div className="CardHolder">
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum1} alt="pics" />
          <div className="textSection">
            <h1>Kulrang Tolstovka Qiz</h1>
            <button id="btn-buy">400.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum2} alt="pics" />
          <div className="textSection">
            <h1>Qizil Tolstovka Bola</h1>
            <button id="btn-buy">400.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum3} alt="pics" />
          <div className="textSection">
            <h1>Ko'k Tolstovka Qiz</h1>
            <button id="btn-buy">400.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum4} alt="pics" />
          <div className="textSection">
            <h1>Kulrang Tolstovka Bola</h1>
            <button id="btn-buy">400.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum5} alt="pics" />
          <div className="textSection">
            <h1>Qora Futbolka Bola</h1>
            <button id="btn-buy">250.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum6} alt="pics" />
          <div className="textSection">
            <h1>Yashil Futbolka Bola</h1>
            <button id="btn-buy">250.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum7} alt="pics" />
          <div className="textSection">
            <h1>Oq Futbolka Qiz</h1>
            <button id="btn-buy">250.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum8} alt="pics" />
          <div className="textSection">
            <h1>Qora Futbolka Qiz</h1>
            <button id="btn-buy">250.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum9} alt="pics" />
          <div className="textSection">
            <h1>Bosh Kiyim Sarg'ish</h1>
            <button id="btn-buy">149.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum10} alt="pics" />
          <div className="textSection">
            <h1>Bosh Kiyim Yashil</h1>
            <button id="btn-buy">149.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum11} alt="pics" />
          <div className="textSection">
            <h1>Bosh Kiyim Qora</h1>
            <button id="btn-buy">149.000 so'm</button>
          </div>
        </div>
        <div className="Card">
          <img style={{border:'2px solid #112'}} src={imgNum12} alt="pics" />
          <div className="textSection">
            <h1>Bosh Kiyim Kulrang</h1>
            <button id="btn-buy">149.000 so'm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClothes;
