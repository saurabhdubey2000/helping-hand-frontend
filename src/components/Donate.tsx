import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Donate: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [amount, setAmount] = useState("");

    const openRazorpay = () => {
        if (!name.trim() || !contact.trim() || !amount.trim() || isNaN(Number(amount)) || Number(amount) <= 0) {
            alert("Please enter valid details!");
            return;
        }

        const options = {
            key: "rzp_test_9r2z1T5KywbKNq", // 🔹 Replace with your Razorpay API Key
            amount: Number(amount) * 100,  // Convert INR to paise
            currency: "INR",
            name: "Helping Hand NGO",
            description: "Support our cause",
            image: "https://your-logo-url.com/logo.png",
            handler: function (response: any) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            },
            prefill: {
                name: name,
                email: "rajeshjha1848@gmail.com",
                contact: contact
            },
            theme: {
                color: "#3399cc"
            },
            method: {
                upi: true,  // ✅ Google Pay / UPI Enable
                card: true,
                netbanking: true
            }
        };

        const rzp1 = new (window as any).Razorpay(options);
        rzp1.open();
        setIsOpen(false);
    };

    return (
        <div>
            {/* <button className="donate-btn" onClick={() => setIsOpen(true)}>Donate Now</button> */}
            <Button className="donate" onClick={() => setIsOpen(true)}>DONATE NOW</Button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                        <h3>Enter Your Details</h3>
                        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Enter your contact number" value={contact} onChange={(e) => setContact(e.target.value)} />
                        <input type="number" placeholder="Enter amount (INR)" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <button className="pay-btn" onClick={openRazorpay}>Proceed to Pay</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donate;
