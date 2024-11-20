import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="confirmation-container">
            <style>{`
                .confirmation-container {
                    background-color: #f3f4f6;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    font-family: 'Arial', sans-serif;
                }
                .confirmation-header {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #16a34a;
                    margin-bottom: 1.5rem;
                }
                .confirmation-card {
                    background-color: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                    width: 100%;
                    max-width: 600px;
                    text-align: center;
                }
                .confirmation-message {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #16a34a;
                    margin-bottom: 2rem;
                }
                .back-to-home-button {
                    background-color: #2563eb;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    border-radius: 0.375rem;
                    text-decoration: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    text-align: center;
                    display: inline-block;
                }
                .back-to-home-button:hover {
                    background-color: #1d4ed8;
                }
            `}</style>

            <div className="confirmation-card">
                <h2 className="confirmation-header">Payment Successful</h2>
                <p className="confirmation-message">
                    Thank you for your purchase! Your payment was successfully processed.
                </p>
                <button 
                    className="back-to-home-button" 
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
