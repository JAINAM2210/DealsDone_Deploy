import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const updateCartQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
        console.log('clearCart called');
    };

    useEffect(() => {
        console.log('Cart state updated:', cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, updateCartQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;