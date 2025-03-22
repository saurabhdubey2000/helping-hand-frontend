import "../assets/styles/global.scss";
import { Phone, Email } from "@mui/icons-material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";
import Donate from "./Donate";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <span>Welcome to Helping Hand Trust</span>
        <div className="contact-info">
          <Phone /> <span>+91 9322282082</span>
          <Email /> <span>info@helpinghand.in</span>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><LinkedIn /></a>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <Navbar expand="lg" bg="light" variant="light" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#">
            <img src="/logo.png" alt="Cancer Care Logo" className="logo" />
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
              <Button className="login">Login Now</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
