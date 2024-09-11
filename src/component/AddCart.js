

import React, { useContext } from 'react';
import {CartContext} from './context/CartContext'

import { Box, Button, Card, CardContent, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const AddCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ color: 'hotpink', marginBottom: 3 }}>
            Your Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Typography variant="h6" align="center">Your cart is empty</Typography>
          ) : (
            <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Add</TableCell>
                    <TableCell align="center">Remove</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img src={item.image} alt={item.name} style={{ width: 50, height: 50 }} />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="center">{item.price}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => updateQuantity(item.id, 1)} color="primary">
                          <AddIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => updateQuantity(item.id, -1)} color="secondary">
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => removeFromCart(item.id)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
            <Box sx={{ backgroundColor: 'hotpink', color: 'white', padding: 2, marginBottom: 2 }}>
              <Typography variant="h6">Total Quantity: {totalQuantity}</Typography>
              <Typography variant="h6">Total Bill: {totalPrice}</Typography>
            </Box>
            <Button variant="contained" color="secondary" sx={{ backgroundColor: 'hotpink' }}>
              Checkout Items
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddCart;

