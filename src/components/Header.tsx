import "../assets/styles/global.scss";
import { Phone, Email } from "@mui/icons-material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";
import Donate from "./Donate";
import Logo from "../assets/images/logo1.png"

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="desktop-view">
          <span>Welcome to Helping Hand Social Welfare Foundation</span>
          <div className="contact-info">
            <Phone /> <span>+91 9322282082</span>
            <Email /> <span>ishaan@helpinghandngo.in</span>
            <div className="social-icons">
              <a href="#"><Facebook /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><LinkedIn /></a>
            </div>
          </div>
        </div>
        <div className="mobile-view">
          Helping Hand Social Welfare Foundation
        </div>
      </div>
      {/* Main Navigation */}
      <Navbar expand="lg" variant="light" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Cancer Care Logo" className="logo" />
            <h3 className="logo-title">Helping Hand Social Welfare Foundation</h3>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">CAMPAIGN</Nav.Link>
              <Nav.Link href="#">GET INVOLVED</Nav.Link>
              <Nav.Link href="#">SUCCESS CASE</Nav.Link>
              <Nav.Link href="#">CONTACT US</Nav.Link>
              {/* add by RJ */}
              <Nav.Link href="#">LEGAL DOCUMENT</Nav.Link>
            </Nav>
            <div className="buttons">
              <Button className="donate">DONATE NOW</Button>
              <Donate/>
              {/* <Button className="login">Login Now</Button> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
