import "./Portfolio.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function VideoEditing() {
  return (
    <div className="videoediting text-center">
      <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <h1 className="display3">Video Editing</h1>
        <p>
          Here are some of the Sample video editing projects that I have
          created. These samples includes a short video on hwo I can color color
          grade your video and the imortance of background music in your videos.
        </p>

        {/* Hidden on Small Screens */}

        <Row
          className="d-none d-md-block  d-lg-block  d-xl-block  d-xxl-block"
          style={{ textAlign: "center", padding: "50px" }}
        >
          <Col style={{ marginBottom: "10px" }}>
            <iframe
              width="640"
              height="320"
              src="https://www.youtube.com/embed/Sf2vjCM-i_4"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen
              title="Sample 01"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <iframe
              width="640"
              height="320"
              src="https://www.youtube.com/embed/mZDjgT2z7oE"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen
              title="Sample 02"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <iframe
              width="640"
              height="320"
              src="https://www.youtube.com/embed/ej7xuF8bD10"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen
              title="Sample 03"
            />
          </Col>
        </Row>

        {/* Visible on Small Screen */}

        <Row className="d-block d-sm-none" style={{ textAlign: "center" }}>
          <Col style={{ marginBottom: "10px" }}>
            <iframe
              src="https://www.youtube.com/embed/Sf2vjCM-i_4"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen
              title="Sample 01"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <iframe
              src="https://www.youtube.com/embed/mZDjgT2z7oE"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen
              title="Sample 02"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }}>
            <iframe
              src="https://www.youtube.com/embed/ej7xuF8bD10"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen
              title="Sample 03"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoEditing;
