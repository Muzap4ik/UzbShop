import React from "react";
import "./HomePage.css";
import img from "../../images/fudbplka uzb.jpg";
import img2 from "../../images/fudbolka uzb chorniy.jpg";
import img3 from "../../images/huddi uzb.jpg"
import br_img from "../../images/brelok_oq.jpg";
import br_img2 from "../../images/brelok_qora.jpg";
import br_komplekt from "../../images/komplekt.jpg";
import soat_qora from "../../images/sogot qora.jpg";
import soat_oq from "../../images/sogot oq.jpg";
import soat_dxx from "../../images/sogot.dxx.jpg";
import chex_oq from "../../images/oq chexol.jpg";
import chex_qora from "../../images/qora chexol.jpg";
import chex_prozr from "../../images/qop qora chexol.jpg";

const HomePage = () => {
  return (
    <div className="card-container">
      <div className="images">
        <div className="card1">
          <h1>Qora Futbolka</h1>
          <img src={img2} alt="" />
          <p>Narx: 150.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Oq Futbolka</h1>
          <img src={img} alt="" />
          <p>Narx: 150.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Oltin Futbolka</h1>
          <img src={img3} alt="" />
          <p>Narx: 150.000 so'm</p>
        </div>
      </div>
      <div className="images">
        <div className="card1">
          <h1>Brelok Qora</h1>
          <img src={br_img} alt="" />
          <p>Narx: 30.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Brelok Oq</h1>
          <img src={br_img2} alt="" />
          <p>Narx: 30.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Brelok 2 tasi 1</h1>
          <img src={br_komplekt} alt="" />
          <p>Narx: 50.000 so'm</p>
        </div>
      </div>
      <div className="images">
        <div className="card1">
          <h1>Qora Soat</h1>
          <img src={soat_qora} alt="" />
          <p>Narx: 500.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Oq Soat</h1>
          <img src={soat_oq} alt="" />
          <p>Narx: 500.000 so'm</p>
        </div>
        <div className="card1">
          <h1>DXX Soati</h1>
          <img src={soat_dxx} alt="" />
          <p>Narx: 400.000 so'm</p>
        </div>
      </div>
      <div className="images">
        <div className="card1">
          <h1>Chehol Oq</h1>
          <img src={chex_oq} alt="" />
          <p>Narx: 99.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Chehol Qora</h1>
          <img src={chex_qora} alt="" />
          <p>Narx: 99.000 so'm</p>
        </div>
        <div className="card1">
          <h1>Chehol Prozrachniy</h1>
          <img src={chex_prozr} alt="" />
          <p>Narx: 50.000 so'm</p>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
