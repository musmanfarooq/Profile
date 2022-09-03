import "../App.css";
import React, { createContext, useState } from "react";
import Contactme from "./Contactme";
import Homepage from "./Homepage";
import Services from "./Services";
import Summary from "./Summary";
import Switch from "react-switch";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import HomepagePortfolio from "./HomepagePortfolio";

export const ThemeContext = createContext(null);

function Navigationbar() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
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
                <Nav.Link onClick={() => setExpanded(false)} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} href="#Summary">
                  Summary
                </Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} href="#Services">
                  Services
                </Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} href="#Contact">
                  Contact
                </Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)}>
                  <Link
                    to="/Portfolio"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Portfolio
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
        <section id="home">
          <Homepage />
        </section>
        <section id="Summary">
          <Summary />
          </section>
          <section id="Portfolio">
          <HomepagePortfolio/>
          </section>
        <section id="Services">
          <Services />
        </section>
        <section id="Contact">
          <Contactme />
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default Navigationbar;
