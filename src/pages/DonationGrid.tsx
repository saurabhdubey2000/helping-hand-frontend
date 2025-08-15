import React, { useState } from "react";
import RP1 from "../assets/images/RP1.jpg";
import { Button, Modal } from "react-bootstrap";

interface DonationCardProps {
  image: string;
  amount: string;
  name: string;
  onHelpClick: () => void;
}

const DonationCard: React.FC<DonationCardProps> = ({ image, amount, name, onHelpClick }) => {
  return (
    <div className="donation-card">
      <div className="amount">{amount}</div>
      <img src={image} alt={name} className="patient-image" />
      <h3>{name}</h3>
      <button className="donate-btn" onClick={onHelpClick}>
        Help Now!
      </button>
    </div>
  );
};

const DonationGrid: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const donations = [
    {
      image: RP1,
      amount: "1,00,000/-",
      name: "Shabhnam Prvin(Uterus Sugery)",
    },
  ];

  return (
    <div className="donation-grid" id="donation-grid">
      <h4>Urgent Care, Immediate Support</h4>
      <h2>
        Swift Assistance for Critical Medical <span>Emergencies</span>
      </h2>
      <div className="cards-container">
        {donations.map((donation, index) => (
          <DonationCard
            key={index}
            {...donation}
            onHelpClick={() => setShowModal(true)} // ✅ Modal open karega
          />
        ))}
      </div>

      {/* ✅ Modal open/close fix */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Help Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="payment-details">
            <div className="detail-row">
              <span className="label">Account Name:</span>
              <span className="value">Shabnam Prvin</span>
            </div>
            <div className="detail-row">
              <span className="label">Account No:</span>
              <span className="value">59182294233</span>
            </div>
            <div className="detail-row">
              <span className="label">IFSC Code:</span>
              <span className="value">IDIB000B811</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DonationGrid;
