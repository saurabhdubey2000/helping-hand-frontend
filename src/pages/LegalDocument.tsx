import "../assets/styles/global.scss";
import { Container } from "react-bootstrap";

const LegalDocument = () => {
  return (
    <Container className="legal-document">
      <h1>Legal Document</h1>
      <p>
        Welcome to Helping Hand Trust. This legal document outlines the terms and conditions governing our operations and services.
      </p>
      <h2>1. Introduction</h2>
      <p>
        Helping Hand Trust is a registered non-governmental organization (NGO) dedicated to providing support and assistance to those in need.
      </p>
      <h2>2. Terms of Service</h2>
      <p>
        By accessing our website, you agree to comply with our policies and regulations. Unauthorized use of our content is prohibited.
      </p>
      <h2>3. Privacy Policy</h2>
      <p>
        We value your privacy and ensure that your personal information is handled securely. Please refer to our Privacy Policy for details.
      </p>
      <h2>4. Donations and Refunds</h2>
      <p>
        All donations are voluntary and non-refundable. Funds are utilized for the intended charitable purposes.
      </p>
      <h2>5. Contact Information</h2>
      <p>
        For any legal inquiries, please contact us at: info@helpinghand.in
      </p>
    </Container>
  );
};

export default LegalDocument;
