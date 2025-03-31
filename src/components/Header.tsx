import "../assets/styles/global.scss";
import { Phone, Email } from "@mui/icons-material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import Donate from "./Donate";
import Logo from "../assets/images/helping_hand_ngo.jpeg"
// add by RJ
import { WhatsApp } from "@mui/icons-material";
import { Modal, Button } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
//  add by rj 
  const [showModal, setShowModal] = useState(false);

  // Modal Open/Close Handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const openWhatsApp = (message) => {
    const phoneNumber = "919004545410"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Opens in new tab
  };
  

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="desktop-view">
          <span>Welcome to Helping Hand Social Welfare Foundation</span>
          <div className="contact-info">
            <Phone /> <span>+91 9004545410</span>
            <Email /> <span>foundationhelpinghandsocialand@gmail.com</span>
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
            <h3 className="logo-title"></h3>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#footer">ABOUT</Nav.Link>
              <Nav.Link href="#donation-grid">CAMPAIGN</Nav.Link>
              <Nav.Link href="#">GET INVOLVED</Nav.Link>
              <Nav.Link href="#about">SUCCESS CASE</Nav.Link>
              <Nav.Link href="#">CONTACT US</Nav.Link>
              {/* add by RJ */}
              <Nav.Link href="#">LEGAL DOCUMENT</Nav.Link>
            </Nav>
            <div className="buttons">
             
              <Donate/>
              {/* <Button className="login">Login Now</Button> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* add by Rj for WhatsApp */}

       {/* WhatsApp Floating Button */}
       <div className="whatsapp-float" onClick={handleOpenModal}>
        <WhatsApp />
      </div>

      {/* WhatsApp Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us on WhatsApp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select an option:</p>
          <div className="modal-buttons">
            <Button
              variant="success"
              className="w-100 mb-2"
              onClick={() => openWhatsApp("Hello, I need Technical Support")}
            >
              Technical Support
            </Button>
            <Button
              variant="primary"
              className="w-100"
              onClick={() => openWhatsApp("Hello, I need General Support")}
            >
              General Support
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      
    </header>
  );
};

export default Header;
