import React from "react";
// import "./DetailComponent.scss";
import DetailImage from "../assets/images/detail-img.jpg"; 

const DetailComponent: React.FC = () => {
  return (
    <div className="detail-container">
      <div className="image">
        <img src={DetailImage} alt="Doctor holding patient's hand" />
      </div>
      <div className="content">
        <h4>Together, We Bring Hope and Healing</h4>
        <h2>
          Compassionate Care, <br /> Unwavering <span>Support</span>
        </h2>
        <p>
          Cancer Care Mission Trust is a non-profit dedicated to supporting cancer patients with 
          emotional care, financial aid, treatment access, and education. We empower patients and 
          families, offering hope, resilience, and comprehensive care to ensure no one fights alone.
        </p>
        <div className="info-boxes">
          <div className="info-box">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Trusted organization</h3>
            <p>A trusted organization dedicated to compassionate cancer care and support.</p>
          </div>
          <div className="info-box">
            <i className="fas fa-award"></i>
            <h3>Awarded services</h3>
            <p>Recognized for excellence in compassionate cancer care and support.</p>
          </div>
        </div>
        <button className="btn">View More</button>
      </div>
    </div>
  );
};

export default DetailComponent;
