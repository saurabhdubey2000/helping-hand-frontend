import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };
  return (
    <footer>
      <div className="footer">
        {/* Get in Touch Section */}
        <div className="footer-section">
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-container">
          {/* About Us Section */}
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <div className="underline"></div>
            <p><LocationOnIcon /> G-55, The Zone Mall, Near Food Lord Hotel, Chandavarkar Lane, Borivali (W), Mumbai 400092, Maharashtra (INDIA)</p>
            <p><PhoneIcon /> For Any Queries: 9322282082</p>
            <p><EmailIcon /> info@ccmorg.in</p>
          </div>
          <div className="footer-section">
            <span className="share-text">Share:</span>
            <div className="social-icons">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 10px' }}>
        <p style={{ color: '#a5a5a5' }}>© 2025 Helping Hand All Rights Reserved .</p>
        <p style={{ color: '#a5a5a5' }}>Designed by Celebrity Tech Solutions Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
