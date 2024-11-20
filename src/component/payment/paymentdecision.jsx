import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentDecision = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const handleShowSuccess = () => {
        setShowSuccessMessage(true);
        navigate('/payment-success', { 
            state: { 
                transactionId: Math.random().toString(36).substr(2, 9),
            }
        });  // Redirect to PaymentConfirmation page
    };

    const handleHideSuccess = () => {
        setShowSuccessMessage(false);
        navigate('/payment-fail');  // Redirect to PaymentFail page
    };

    return (
        <div className="payment-decision-container">
            <style>{`
                .payment-decision-container {
                    background-color: #f3f4f6;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    font-family: 'Arial', sans-serif;
                }
                .header {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #2563eb;
                    margin-bottom: 1.5rem;
                }
                .message-box {
                    background-color: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                    width: 100%;
                    max-width: 600px;
                    text-align: center;
                }
                .btn {
                    background-color: #2563eb;
                    color: white;
                    padding: 0.75rem 2rem;
                    font-size: 1rem;
                    font-weight: 600;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    margin: 1rem;
                }
                .btn:hover {
                    background-color: #1d4ed8;
                }
                .btn-secondary {
                    background-color: #e5e7eb;
                    color: #4b5563;
                }
                .btn-secondary:hover {
                    background-color: #d1d5db;
                }
                .success-message {
                    margin-top: 2rem;
                    font-size: 1.25rem;
                    color: #16a34a;
                    font-weight: 600;
                }
            `}</style>
            <h2 className="header">Would you like to confirm your payment?</h2>

            <div className="message-box">
                <div>
                    <button className="btn" onClick={handleShowSuccess}>
                        Confirm Payment
                    </button>
                    <button className="btn btn-secondary" onClick={handleHideSuccess}>
                        Cancel Payment
                    </button>
                </div>

                {showSuccessMessage && (
                    <div className="success-message">
                        Payment Successful! Thank you for your purchase.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentDecision;
