import React from "react";
import { createContext, useState } from "react";
import Switch from "react-switch";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import WebDevelopment from "../Components/WebDevelopment";
import GraphicDesign from "../Components/GraphicDesign";
import VideoEditing from "../Components/VideoEditing";

export const ThemeContext = createContext(null);

function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {/* Nabbar for Portfolio page */}
        <Navbar
          className="navbar"
          bg="dark"
          variant="dark"
          expand="lg"
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Usman Farooq
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : "expanded")}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => setExpanded(false)}>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)}>
                  <label>
                    {theme === "light" ? "Light Mode " : "Dark Mode "}
                  </label>
                </Nav.Link>
                <Nav.Link>
                  <div className="switch">
                    <Switch onChange={toggleTheme} checked={theme === "dark"} />
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* All the Modules */}
        <GraphicDesign />
        <WebDevelopment />
        <VideoEditing />
      </div>
    </ThemeContext.Provider>
  );
}

export default Portfolio;
