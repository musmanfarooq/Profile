import React, { useState } from "react";
import { Button, Col, Row, Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Contactmeform from "./Contactmeform";

const Contactme = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        textAlign: "left",
        padding: "50px",
      }}
      className="contactme"
    >
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Contact Me
      </h3>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Feel free to contact, I am open to quries 24/7. Use any of the link
        below to contact me.
      </p>
      {/* Hidden on Small Screen */}
      <div className="d-none d-md-block  d-lg-block  d-xl-block  d-xxl-block">
        <Row>
          <Col xs={4}>
            <h2>
              <strong>Social Links</strong>
            </h2>
            <br />
            <Button
              variant="outline-light"
              href="https://github.com/musmanfarooq"
              target="_blank"
              className="mt-2"
            >
              <Icon.Github  style ={{marginRight: "10px"}}/>
              Github
            </Button>
            <Button
              variant="outline-light"
              href="https://www.linkedin.com/in/usman-farooq-61ba08197/"
              target="_blank"
              className="mt-2"
              style ={{marginLeft: "10px"}}
            >
              <Icon.Linkedin style ={{marginRight: "10px"}}/>
              Linkedin
            </Button>
            <br />
            <Button
              variant="outline-light"
              className="mt-4"
              onClick={handleShow}
            >
              <Icon.Envelope  style ={{marginRight: "10px"}}/>
              E-Mail
            </Button>
            <Button
              variant="outline-light"
              href="https://www.facebook.com/usmanfarooq05"
              target="_blank"
              className="mt-4"
              style ={{marginLeft: "10px"}}
            >
              <Icon.Facebook  style ={{marginRight: "10px"}}/>
              Facebook
            </Button>
            <br />
            <Button
              variant="outline-light"
              href="https://www.instagram.com/usmanfarooq05"
              target="_blank"
              className="mt-4"
            >
              <Icon.Instagram  style ={{marginRight: "10px"}}/>
              Instagram
            </Button>
            <Button
              variant="outline-light"
              href="https://www.twitter.com/usmanfarooq05"
              target="_blank"
              className="mt-4"
              style ={{marginLeft: "10px"}}
            >
              <Icon.Twitter  style ={{marginRight: "10px"}}/>
              Twitter
            </Button>
          </Col>
          <Col style={{ padding: "20px" }}>
            {/* Form for contacting Me */}
            <Contactmeform  style ={{marginRight: "10px"}}/>
          </Col>
        </Row>
      </div>
      {/* Visible on Small Screen */}
      <div className="d-block d-md-none">
        <Row style={{ paddingTop: "50px" }}>
          <Col style={{ marginBottom: "10px" }}>
            <Button
              variant="light"
              href="https://github.com/musmanfarooq"
              target="_blank"
            >
              <Icon.Github />
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              href="https://www.linkedin.com/in/usman-farooq-61ba08197/"
              target="_blank"
            >
              <Icon.Linkedin />
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={handleShow}>
              <Icon.Envelope />
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              href="https://www.facebook.com/usmanfarooq05"
              target="_blank"
            >
              <Icon.Facebook />
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              href="https://www.instagram.com/usmanfarooq05"
              target="_blank"
            >
              <Icon.Instagram />
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              href="https://www.twitter.com/usmanfarooq05"
              target="_blank"
            >
              <Icon.Twitter />
            </Button>
            <br></br>
          </Col>
        </Row>
        {/* Form for contacting Me */}
        <Contactmeform />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>
            m.usmanfarooq753@gmail.com
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          Send me your quries to the mail provided above
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contactme;
