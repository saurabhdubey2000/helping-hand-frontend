import "../assets/styles/global.scss";
import { Phone, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import Donate from "./Donate";
import Logo from "../assets/images/helping_hand_ngo.jpeg"
import { WhatsApp } from "@mui/icons-material";
import { Modal, Button } from "react-bootstrap";
import CarouselImg from "../assets/images/pencard.jpeg"
import CarouselImg2 from "../assets/images/doc1.jpeg"
import CarouselImg3 from "../assets/images/doc2.jpeg"
import Domi from "../assets/images/domi.jpg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);

  const [index, setIndex] = useState(0);
  const images = [CarouselImg, CarouselImg2, CarouselImg3, Domi];

  const handlePrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const openWhatsApp = (message: string | number | boolean) => {
    const phoneNumber = "919004545410";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="desktop-view">
          <span>Welcome to Helping Hand Social Welfare Foundation</span>
          <div className="contact-info" id="headerInfo">
            <Phone /> <span><a href="tel:+919004545410">+91 9004545410</a></span>
            <Email /> <span><a href="mailto:foundationhelpinghandsocialand@gmail.com">
              foundationhelpinghandsocialand@gmail.com
            </a></span>
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

      <Navbar expand="lg" variant="light" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Cancer Care Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links">
              
              <NavDropdown
                title="ABOUT"
                id="about-dropdown"
                show={openDropdown === "about"}
                onClick={() => toggleDropdown("about")}
              >
                <NavDropdown.Item as={Link} to="/about-section">About</NavDropdown.Item>
                <NavDropdown.Item>Events & Gallery</NavDropdown.Item>
                <NavDropdown.Item>Associated Hospitals</NavDropdown.Item>
                <NavDropdown.Item>Mission/Vision</NavDropdown.Item>
                <NavDropdown.Item>Medical Advisor</NavDropdown.Item>
                <NavDropdown.Item>Legal Advisor</NavDropdown.Item>
                <NavDropdown.Item>Board of Directors</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setShowLegalModal(true)}>Legal Documents</NavDropdown.Item>
                <NavDropdown.Item>Terms and Conditions</NavDropdown.Item>
                <NavDropdown.Item>Refund Policy</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="CAMPAIGN"
                id="campaign-dropdown"
                show={openDropdown === "campaign"}
                onClick={() => toggleDropdown("campaign")}
              >
                <NavDropdown.Item>Running Campaign</NavDropdown.Item>
                <NavDropdown.Item>Upcoming Campaign</NavDropdown.Item>
                <NavDropdown.Item>Food Campaign</NavDropdown.Item>
                <NavDropdown.Item>Education Campaign</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="GET INVOLVED"
                id="get-involved-dropdown"
                show={openDropdown === "involved"}
                onClick={() => toggleDropdown("involved")}
              >
                <NavDropdown.Item>Career</NavDropdown.Item>
                <NavDropdown.Item>Volunteers</NavDropdown.Item>
                <NavDropdown.Item>Member With US</NavDropdown.Item>
                <NavDropdown.Item>Partner with US</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="underLine">SUCCESS CASE</Nav.Link>
              <Nav.Link className="underLine">CONTACT US</Nav.Link>
            </Nav>
            <div className="buttons">
              <Donate />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="whatsapp-float" onClick={handleOpenModal}>
        <WhatsApp />
      </div>

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

      <Modal
        show={showLegalModal}
        onHide={() => setShowLegalModal(false)}
        centered
        dialogClassName="legal-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Legal Document</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex align-items-center justify-content-center">
          <button className="custom-arrow left-arrow" onClick={handlePrev}>
            <FaArrowLeft size={28} />
          </button>

          <img
            src={images[index]}
            alt={`Document ${index + 1}`}
            className="doc-image"
          />

          <button className="custom-arrow right-arrow" onClick={handleNext}>
            <FaArrowRight size={28} />
          </button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLegalModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};


export default Header;
