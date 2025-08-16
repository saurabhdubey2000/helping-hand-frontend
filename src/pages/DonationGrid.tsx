import React, { useState } from "react";
import RP1 from "../assets/images/RP1.jpg";
import RP1D from "../assets/images/RP1-D.jpg";
import RP2 from "../assets/images/RP2.jpg";
import RP2D from "../assets/images/RP2-D.jpg";
import { Button, Modal } from "react-bootstrap";

interface DonationCardProps {
  image: string;
  amount: string;
  image2?: string; 
  name: string;
  onHelpClick: () => void;
}

interface Donation {
  image: string;
  amount: string;
  image2?: string;
  name: string;
  accountName: string;
  accountNo: string;
  ifsc: string;
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
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);

  const donations: Donation[] = [
    {
      image: RP1,
      image2: RP1D,
      amount: "15,000/-",
      name: "Shabhnam Prvin (Uterus Surgery)",
      accountName: "Shabnam Prvin",
      accountNo: "59182294233",
      ifsc: "IDIB000B811",
    },
    {
      image: RP2,
      image2: RP2D,
      amount: "50,000/-",
      name: "Mohammed Mumtaz (Cancer Surgery)",
      accountName: "Mohammed Mumtaz",
      accountNo: "925020034093667",
      ifsc: "UTIB0004707",
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
            onHelpClick={() => {
              setSelectedDonation(donation);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Help Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDonation?.image2 && (
            <div className="payment-details">
              <img src={selectedDonation.image2}/>
              <div className="detail-row">
                <span className="label">Account Name:</span>
                <span className="value">{selectedDonation.accountName}</span>
              </div>
              <div className="detail-row">
                <span className="label">Account No:</span>
                <span className="value">{selectedDonation.accountNo}</span>
              </div>
              <div className="detail-row">
                <span className="label">IFSC Code:</span>
                <span className="value">{selectedDonation.ifsc}</span>
              </div>
            </div>
          )}
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
