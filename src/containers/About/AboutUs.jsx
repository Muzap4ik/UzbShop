import React from "react";
import "./AboutUs.css";
import { DefaultPlayer as Video } from "react-html5video";
import "../../../node_modules/react-html5video/dist/styles.css";
import bg_video from "../videos/clothing.mp4";
import cert1 from "../../images/certificate.jpg";
import cert2 from "../../images/cert2.webp";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <div className="sections">
        <div className="left-section">
          <div className="mainTitle">
            <h1>Biz haqimizda . . .</h1>
          </div>
          <div className="mainParagraph">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              iure dolor nam, culpa quasi est nostrum! Inventore unde illum
              porro, consectetur nam aperiam dolorum nulla quidem id quos
              officia aut perferendis laborum suscipit, libero maiores!
              Veritatis sunt facilis sit amet nam error nihil exercitationem
              recusandae nisi blanditiis harum dolorum consequatur iste
              necessitatibus, soluta obcaecati. Eum incidunt dolorem delectus
              cupiditate, temporibus id mollitia nulla soluta deserunt nam
              possimus numquam accusamus beatae. Id a laudantium quibusdam ex
              natus illo iusto consequuntur explicabo deserunt, ratione nam aut
              ducimus dolorum deleniti consequatur pariatur suscipit? Ea
              suscipit ducimus dolorem omnis aperiam fugit modi, iure totam!
            </p>
          </div>
        </div>
        <div className="right-section">
          <Video autoPlay loop id="vid">
            <source src={bg_video} type="video/webm" />
          </Video>
        </div>
      </div>
      <div className="certificates">
        <div className="title">
            <h1>Sertifikatlarimiz</h1>
        </div>
        <div className="images2">
          <img src={cert1} alt="pics" />
          <img src={cert2} alt="pics" />
          <img src={cert1} alt="pics" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
