import "../App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Services = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
      className="services"
    >
      <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <h3>Services</h3>
        <h1>What I Offer?</h1>
        <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          If you are looking for a web desgier, UI/UX desginer or a graphic
          desgier than I am the right person for you. I can build responsive
          landing portfolio website for you within two or three days and if you
          are in need of a amazing graphics desginer with years of experience
          then I am the right person for you.
        </p>
        <Row style={{ paddingTop: "10px" }}>
          <Col>
            <Icon.FileCode size="60px" style={{ marginBottom: "10px" }} />
            <br />
            Front-end Development
          </Col>
          <Col>
            <Icon.Pen size="60px" style={{ marginBottom: "10px" }} />
            <br />
            Graphic Designing
          </Col>
          <Col>
            <Icon.Laptop size="60px" style={{ marginBottom: "10px" }} />
            <br />
            Video Editing
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
