import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Payment = () => {
    const location = useLocation();
    const { cartItems = [], totalAmount = 0 } = location.state || {};
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('debitCard');
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: '',
        upiId: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cardNumber') {
            const formattedValue = value
                .replace(/\D/g, '')
                .substring(0, 16)
                .replace(/(\d{4})/g, '$1 ')
                .trim();
            setFormData({ ...formData, [name]: formattedValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedPaymentMethod === 'debitCard' || selectedPaymentMethod === 'creditCard') {
            if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
                alert('Card number must be 16 digits.');
                return;
            }
            if (formData.cvv.length !== 3) {
                alert('CVV must be exactly 3 digits.');
                return;
            }
            const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!expiryRegex.test(formData.expiryDate)) {
                alert('Please enter a valid expiry date in MM/YY format.');
                return;
            }
        } else if (selectedPaymentMethod === 'upi' && !formData.upiId) {
            alert('Please enter a valid UPI ID.');
            return;
        }

        console.log('Payment submitted:', formData);
        navigate('/paymentdecision');
    };

    // Animation Variants for sliding effect
    const slideVariants = {
        hidden: { x: 300, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', duration: 0.6 } },
        exit: { x: -300, opacity: 0, transition: { type: 'spring', duration: 0.6 } },
    };

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Left Section: Payment Form */}
            <div style={{ flex: 2, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Payment Method</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setSelectedPaymentMethod('debitCard')}
                        style={{
                            padding: '10px 20px',
                            border: selectedPaymentMethod === 'debitCard' ? '2px solid #007bff' : '1px solid #ccc',
                            backgroundColor: selectedPaymentMethod === 'debitCard' ? '#007bff' : '#fff',
                            color: selectedPaymentMethod === 'debitCard' ? '#fff' : '#000',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Debit Card
                    </button>
                    <button
                        onClick={() => setSelectedPaymentMethod('creditCard')}
                        style={{
                            padding: '10px 20px',
                            border: selectedPaymentMethod === 'creditCard' ? '2px solid #007bff' : '1px solid #ccc',
                            backgroundColor: selectedPaymentMethod === 'creditCard' ? '#007bff' : '#fff',
                            color: selectedPaymentMethod === 'creditCard' ? '#fff' : '#000',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Credit Card
                    </button>
                    <button
                        onClick={() => setSelectedPaymentMethod('upi')}
                        style={{
                            padding: '10px 20px',
                            border: selectedPaymentMethod === 'upi' ? '2px solid #007bff' : '1px solid #ccc',
                            backgroundColor: selectedPaymentMethod === 'upi' ? '#007bff' : '#fff',
                            color: selectedPaymentMethod === 'upi' ? '#fff' : '#000',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        UPI
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {selectedPaymentMethod === 'debitCard' || selectedPaymentMethod === 'creditCard' ? (
                        <motion.div
                            key="cardPayment"
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ maxWidth: '400px', margin: '0 auto' }}
                        >
                            <div>
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 1234 1234 1234"
                                    style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
                                />
                            </div>
                            <div>
                                <label>Expiry Date (MM/YY)</label>
                                <input
                                    type="text"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    placeholder="MM/YY"
                                    style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
                                />
                            </div>
                            <div>
                                <label>CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    maxLength="3"
                                    placeholder="123"
                                    style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
                                />
                            </div>
                            <div>
                                <label>Name on Card</label>
                                <input
                                    type="text"
                                    name="nameOnCard"
                                    value={formData.nameOnCard}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="upiPayment"
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ maxWidth: '400px', margin: '0 auto' }}
                        >
                            <div>
                                <label>UPI ID</label>
                                <input
                                    type="text"
                                    name="upiId"
                                    value={formData.upiId}
                                    onChange={handleChange}
                                    placeholder="example@upi"
                                    style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={handleSubmit}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '5px',
                        marginTop: '2rem',
                    }}
                >
                    Pay Now
                </button>
            </div>

            {/* Right Section: Payment Instructions */}
            <div style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#fff',
                borderLeft: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                marginLeft: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: '#333',
                    fontSize: '1.8rem',
                }}>Payment Instructions</h2>

                <p style={{
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    color: '#555',
                }}>
                    1. Choose your preferred payment method from the options on the left.
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    color: '#555',
                }}>
                    2. For card payments, ensure that the card number, expiry date, and CVV are entered correctly.
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    color: '#555',
                }}>
                    3. For UPI payments, make sure to enter a valid UPI ID.
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    color: '#555',
                }}>
                    4. Once all details are filled, click on the "Pay Now" button to proceed with the payment.
                </p>

                <div style={{
                    marginTop: '2rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Secure Payment Process</p>
                    <p style={{ fontSize: '1rem' }}>Your information is securely encrypted for a safe transaction.</p>
                </div>
            </div>

        </div>
    );
};

export default Payment;
