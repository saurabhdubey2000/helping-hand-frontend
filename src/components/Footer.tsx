import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About us</h3>
          <div className="underline"></div>
          <p>
            At Cancer Care Mission Trust, we stand out from other organizations in our unwavering 
            commitment and unique approach towards combating cancer.
          </p>
          <span className="share-text">Share:</span>
          <div className="social-icons">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><LinkedInIcon /></a>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <div className="underline"></div>
          <p><LocationOnIcon /> G-55, The Zone Mall, Near Food Lord Hotel, Chandavarkar Lane, Borivali (W), Mumbai 400092, Maharashtra (INDIA)</p>
          <p><PhoneIcon /> For Any Queries: 9322282082</p>
          <p><EmailIcon /> info@ccmorg.in</p>
        </div>
      </div>
      <hr />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding:'0px 10px'}}>
        <p style={{ color: '#a5a5a5'}}>© 2025 Helping Hand All Rights Reserved .</p>
        <p style={{ color: '#a5a5a5'}}>Designed by Celebrity Tech Solutions Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
