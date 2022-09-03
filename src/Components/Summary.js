import "../App.css"
import React from "react";
import { Button, Container } from "react-bootstrap";

const Summary = () => {
  
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Usman Farooq Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Usman Farooq Resume.pdf';
            alink.click();
        })
    })
}

  return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
        className = "summary"
      >
        <Container>
        <h3>
          Summary
        </h3>
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            I am a front-end web developer for the last year. My expertise shine
            when it comes to javascript, CSS, and HTML 5. I can build the site
            using simple HTML 5, CSS, and complex websites by using React Js. I
            can also develop a website using some of the most famousplatforms
            i.e WordPress, Wix, and Square space.
          </p>

          <Button onClick={onButtonClick} variant="outline-primary">
            Download CV/Resume
          </Button>
        </Container>
      </div>
  );
};

export default Summary;
