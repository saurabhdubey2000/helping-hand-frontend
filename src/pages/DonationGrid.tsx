import React from "react";
// import "./DonationGrid.scss";
import donationImage from "../assets/images/donation-grid.jpg"; // ✅ Unique Name

interface DonationCardProps {
  image: string;
  amount: string;
  name: string;
}

const DonationCard: React.FC<DonationCardProps> = ({ image, amount, name }) => {
  return (
    <div className="donation-card">
      <div className="amount">{amount}</div>
      <img src={image} alt={name} className="patient-image" /> {/* ✅ Use image prop */}
      <h3>{name}</h3>
      <button className="donate-btn">DONATE NOW</button>
    </div>
  );
};

const DonationGrid: React.FC = () => {
  const donations = [
    {
      image: donationImage, // ✅ Corrected image reference
      amount: "10,00,000/-",
      name: "OM PARMESHWAR DHENGALE",
    },
    {
      image: donationImage,
      amount: "29,84,000/-",
      name: "MS. SAMRUDDHI MINEKAR",
    },
    {
      image: donationImage,
      amount: "Rs.35.63 Lakh",
      name: "URGENT APPEAL FOR MASTER BIGHNESH SAHOO",
    },
    {
        image: donationImage, // ✅ Corrected image reference
        amount: "10,00,000/-",
        name: "OM PARMESHWAR DHENGALE",
      },
      {
        image: donationImage,
        amount: "29,84,000/-",
        name: "MS. SAMRUDDHI MINEKAR",
      },
      {
        image: donationImage,
        amount: "Rs.35.63 Lakh",
        name: "URGENT APPEAL FOR MASTER BIGHNESH SAHOO",
      },
      {
        image: donationImage, // ✅ Corrected image reference
        amount: "10,00,000/-",
        name: "OM PARMESHWAR DHENGALE",
      },
      {
        image: donationImage,
        amount: "29,84,000/-",
        name: "MS. SAMRUDDHI MINEKAR",
      },
      {
        image: donationImage,
        amount: "Rs.35.63 Lakh",
        name: "URGENT APPEAL FOR MASTER BIGHNESH SAHOO",
      },
  ];

  return (
    <div className="donation-grid">
      <h4>Urgent Care, Immediate Support</h4>
      <h2>
        Swift Assistance for Critical Medical <span>Emergencies</span>
      </h2>
      <div className="cards-container">
        {donations.map((donation, index) => (
          <DonationCard key={index} {...donation} />
        ))}
      </div>
    </div>
  );
};

export default DonationGrid;
