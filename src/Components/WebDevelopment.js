import "./Portfolio.css";
import "../App.css";
import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Advance01 from "../Pictures/website/Advance01.png";
import Advance02 from "../Pictures/website/Advance02.png";
import Advance03 from "../Pictures/website/Advance03.png";
import Advance04 from "../Pictures/website/Advance04.png";
import Advance05 from "../Pictures/website/Advance05.png";
import Advance06 from "../Pictures/website/Advance06.png";
import Advance07 from "../Pictures/website/Advance07.png";
import Advance08 from "../Pictures/website/Advance08.png";
import Advance09 from "../Pictures/website/Advance09.png";
import Advance10 from "../Pictures/website/Advance10.png";
import PetStore02 from "../Pictures/website/PetStore02.png";
import PetStore03 from "../Pictures/website/PetStore03.png";
import PetStore04 from "../Pictures/website/PetStore04.png";
import PetStore05 from "../Pictures/website/PetStore05.png";
import PetStore06 from "../Pictures/website/PetStore06.png";
import PetStore07 from "../Pictures/website/PetStore07.png";
import PetStore08 from "../Pictures/website/PetStore08.png";
import Acronia01 from "../Pictures/website/acronia/Acronia01.png";
import Acronia02 from "../Pictures/website/acronia/Acronia02.png";
import Acronia03 from "../Pictures/website/acronia/Acronia03.png";
import Acronia04 from "../Pictures/website/acronia/Acronia04.png";
import Acronia05 from "../Pictures/website/acronia/Acronia05.png";
import Acronia06 from "../Pictures/website/acronia/Acronia06.png";

function WebDevelopment() {
  return (
    <div className="websitedevelopment" style={{textAlign:"center"}}>
      <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <h1 className="display3">Website Development</h1>
        <p>
          I have Development many webstie over the some of them are developed by
          using famous tools like Wordpress, Wix and I have also created a
          dropshipping webstie using Shopify. I have also a expert in HTML, CSS,
          JavaScript and Bootstrap. I have also a strong on React.Js infact this
          following webstie is also developed using React.Js. Below are some of
          the few website that I have developed.
        </p>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance01} alt="1st slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance02} alt="2nd slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance03} alt="3rt slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance04} alt="4th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance05} alt="5th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance06} alt="6th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance07} alt="7th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance08} alt="8th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance09} alt="9th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Advance10} alt="10th slide" />
          </Carousel.Item>
        </Carousel>
        {/* Second Carousel */}
        <Carousel className="mt-5">
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore02} alt="2nd slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore03} alt="3rt slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore04} alt="4th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore05} alt="5th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore06} alt="6th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore07} alt="7th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={PetStore08} alt="8th slide" />
          </Carousel.Item>
        </Carousel>
         {/* Third Carousel */}
         <Carousel className="mt-5">
          <Carousel.Item>
            <img className="d-block w-100" src={Acronia01} alt="1st slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Acronia02} alt="2nd slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Acronia03} alt="3rd slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Acronia04} alt="4th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Acronia05} alt="5th slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Acronia06} alt="6th slide" />
          </Carousel.Item>
        </Carousel>

        <br />
      </Container>
    </div>
  );
}

export default WebDevelopment;
