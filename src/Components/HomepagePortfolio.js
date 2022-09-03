import "./Portfolio.css";
import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import scifi from "../Pictures/scifi.png";
import Advance02 from "../Pictures/website/Advance02.png";
import PetStore02 from "../Pictures/website/PetStore02.png";

const HomepagePortfolio = () => {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
      className="portfolio"
    >
      <Container>
        <h3>Portfolio</h3>
        <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          To be honest I don't have a large amount of portfolio to show as I am
          fresh graduate but I have done some projects which can show my skills.
          Click on See More to see my Full Portfolio
        </p>
        <Row className="graphicdesign">
          <Col>
            <img
              src={scifi}
              alt="Sci-fi"
              style={{ width: "200px", height: "200px" }}
            />
            <p className="mt-1">A Sci-fi Scene</p>
          </Col>
          <Col>
            <img
              src={Advance02}
              alt="Sci-fi"
              style={{ width: "250", height: "200px" }}
            />
            <p className="mt-1">Advanced Insurance Website</p>
          </Col>
          <Col>
            <img
              src={PetStore02}
              alt="Sci-fi"
              style={{ width: "250", height: "200px" }}
            />
            <p className="mt-1">A Pet Product Realted Website</p>
          </Col>
        </Row>
        <Button variant="outline-success">
          <Link
            to="/Portfolio"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            See More
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default HomepagePortfolio;
