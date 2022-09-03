import "./Homepage.css"
import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../Pictures/Profile.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hidden on Small Screen */}
      <Container className="d-none d-md-block  d-lg-block  d-xl-block  d-xxl-block">
        <Row>
          <Col
            xs={8}
            style={{
              paddingTop: "100px",
              paddingBottom: "100px",
              paddingRight: "30px",
              paddingleft: "30px",
            }}
          >
            <h5 className="display-4">Hello!</h5>
            <h1 className="display-3" style={{ color: "white" }}>
              I am Usman Farooq
            </h1>
            <br />
            <h5> Introduction</h5>
            <h3 style={{ color: "white" }}>
              Front-end Developer, UI/UX Designer and Graphic Designer
            </h3>
            <br />
            <Button variant="outline-success" href="#Contact">
              Contact Me
            </Button>
          </Col>
          <Col xs={4} style={{ paddingTop: "80px" }}>
            <img
              class="rounded-circle"
              src={profile}
              alt="Me"
              style={{ width: "400px", height: "400px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Visible on Small Screen */}
      <Container className="d-block d-md-none">
        <Row>
          <Col
            xs={12}
            style={{
              paddingTop: "100px",
              paddingBottom: "100px",
              paddingRight: "30px",
              paddingleft: "30px",
            }}
          >
            <h5 className="display-4">Hello!</h5>
            <h1 className="display-3" style={{ color: "white" }}>
              I am Usman Farooq
            </h1>
            <br />
            <h5> Introduction</h5>
            <h3 style={{ color: "white" }}>
              Front-end Developer, UI/UX Designer and Graphic Designer
            </h3>
            <br />
            <Button variant="outline-success" href="#Contact">
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
