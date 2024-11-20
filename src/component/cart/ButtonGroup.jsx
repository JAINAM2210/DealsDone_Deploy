import React, { useState, useContext } from 'react';
import { Button, Box, styled, ButtonGroup } from "@mui/material";
import { CartContext } from '../../context/CartProvider'; // Adjust the import path based on your project structure

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

export const ButtonGroups = ({ productId }) => {
    const { cart, updateCartQuantity } = useContext(CartContext);
    const product = cart.find(item => item.id === productId);
    const [quantity, setQuantity] = useState(product ? product.quantity : 1);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCartQuantity(productId, newQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCartQuantity(productId, newQuantity);
        }
    };

    return (
        <Component>
            <StyledButton onClick={handleDecrease}>-</StyledButton>
            <Button>{quantity}</Button>
            <StyledButton onClick={handleIncrease}>+</StyledButton>
        </Component>
    );
};