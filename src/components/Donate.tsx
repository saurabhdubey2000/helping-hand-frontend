import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Donate: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button className="donate" onClick={() => setIsOpen(true)}>DONATE NOW</Button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3 className="modal-header">Payment Details<span className="close" onClick={() => setIsOpen(false)}>&times;</span></h3>
                        <div className="payment-details">
                            <div className="detail-row">
                                <span className="label">Account Name:</span>
                                <span className="value">HELPING HAND SOCIAL AND WELFARE FOUNDATION</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Account No:</span>
                                <span className="value">925020034093667</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">IFSC Code:</span>
                                <span className="value">UTIB0004707</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donate;
