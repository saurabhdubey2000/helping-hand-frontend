import "../assets/styles/global.scss";
import { useState } from "react";
import { WhatsApp } from "@mui/icons-material";
import { Modal, Button } from "react-bootstrap";

const WhatsAppButton = () => {
  const [showModal, setShowModal] = useState(false);

  // Modal Open/Close Handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Open WhatsApp with predefined message
  const openWhatsApp = (message) => {
    const phoneNumber = "919004545410"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float" onClick={handleOpenModal}>
        <WhatsApp style={{ fontSize: "32px", color: "white" }} />
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
    </>
  );
};

export default WhatsAppButton;
