import "./Portfolio.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Car from "../Pictures/Car01.png";
import scifi from "../Pictures/scifi.png";
import dounut from "../Pictures/dounut.png";
import netflix from "../Pictures/netflix.png";
import blender from "../Pictures/blender.png";
import spotify from "../Pictures/spotify.png";


function GraphicDesign() {
  return (
    <div className="graphicdesign" style={{ textAlign: "center" }}>
      <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <h1 className="display3">Graphic Designing</h1>
        <p>
          Below are some of the sample that are created in 3D using free
          software i.e. Blender. First three Pictures are of virtually created
          world and the last three pictures are logo of Blender, Spotify and
          Netflix respectively. All these images are created with the help of
          free tools.
        </p>
        <Row>
          <Col style={{ marginBottom: "10px" }}>
            <img
              src={Car}
              alt="Car"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="mt-1">A Car parked on hills</p>
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <img
              src={scifi}
              alt="Sci-fi"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="mt-1">A Sci-fi Scene</p>
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <img
              src={dounut}
              alt="Dounut"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="mt-1">A Rendered Picture of Donut</p>
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <img
              src={blender}
              alt="Logo of blender"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="mt-1">Logo of Blender</p>
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <img
              src={spotify}
              alt="Logo of spotify"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="mt-1">Logo of Spotify</p>
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <img
              src={netflix}
              alt="Logo of netflix"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="mt-1">Logo of Netflix</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GraphicDesign;
