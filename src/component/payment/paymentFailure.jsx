import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFail = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleBackToHome = () => {
        navigate('/');  // Navigate back to the home page
    };

    return (
        <div className="fail-container">
            <h2 className="fail-header">Payment Failed</h2>
            <p className="fail-message">Unfortunately, your payment could not be processed. Please try again later.</p>
            <button onClick={handleBackToHome} className="fail-button">Back to Home</button>

            {/* Inline CSS */}
            <style>{`
                .fail-container {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 2rem;
                    font-family: 'Arial', sans-serif;
                }

                .fail-header {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #1f2937;
                    margin-bottom: 1rem;
                }

                .fail-message {
                    font-size: 1.1rem;
                    color: #374151;
                    margin-bottom: 1.5rem;
                }

                .fail-button {
                    padding: 12px 24px;
                    background-color: #2563eb;
                    color: white;
                    font-size: 1rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .fail-button:hover {
                    background-color: #1d4ed8;
                }
            `}</style>
        </div>
    );
};

export default PaymentFail;
