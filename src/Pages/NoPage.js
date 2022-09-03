import "./Portfolio.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="noPage" style={{ textAlign: "center" }}>
      <h1
        className="display-1"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        Error 404
      </h1>
      <p style={{ padding: "50px" }}>
        This is an Invalid link please click the button below to go to home page
      </p>
      <Button>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Home
        </Link>
      </Button>
    </div>
  );
}

export default NoPage;
