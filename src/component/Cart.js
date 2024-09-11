import React from 'react';
import { CartContext } from './context/CartContext';
import { Typography, Button, Grid } from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart } = CartContext;

  if (cartItems.length === 0) {
    return <Typography variant="h6">Your cart is empty</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">Your Cart</Typography>
      <Grid container spacing={2}>
        {cartItems.map((item, index) => (
          <Grid item xs={12} key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                {item.title} - {item.price}
              </Typography>
              <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item.title)}>
                Remove
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
