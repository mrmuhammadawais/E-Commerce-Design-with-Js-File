


// import React, { useContext } from 'react';
// import {CartContext} from '../component/CartContext'

// import { Box, Button, Card, CardContent, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }
//  from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';

// const CartPage = () => {
//   const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h4" align="center" sx={{ color: 'hotpink', marginBottom: 3 }}>
//             Your Cart
//           </Typography>
//           {cartItems.length === 0 ? (
//             <Typography variant="h6" align="center">Your cart is empty</Typography>
//           ) : (
//             <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Product</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell align="center">Quantity</TableCell>
//                     <TableCell align="center">Price</TableCell>
//                     <TableCell align="center">Add</TableCell>
//                     <TableCell align="center">Remove</TableCell>
//                     <TableCell align="center">Delete</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {cartItems.map((item) => (
//                     <TableRow key={item.id}>
//                       <TableCell>
//                         <img src={item.image} alt={item.name} style={{ width: 50, height: 50 }} />
//                       </TableCell>
//                       <TableCell>{item.name}</TableCell>
//                       <TableCell align="center">{item.quantity}</TableCell>
//                       <TableCell align="center">{item.price}</TableCell>
//                       <TableCell align="center">
//                         <IconButton onClick={() => updateQuantity(item.id, 1)} color="primary">
//                           <AddIcon />
//                         </IconButton>
//                       </TableCell>
//                       <TableCell align="center">
//                         <IconButton onClick={() => updateQuantity(item.id, -1)} color="secondary">
//                           <RemoveIcon />
//                         </IconButton>
//                       </TableCell>
//                       <TableCell align="center">
//                         <IconButton onClick={() => removeFromCart(item.id)} color="error">
//                           <DeleteIcon />
//                         </IconButton>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           )}

//           <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
//             <Box sx={{ backgroundColor: 'hotpink', color: 'white', padding: 2, marginBottom: 2 }}>
//               <Typography variant="h6">Total Quantity: {totalQuantity}</Typography>
//               <Typography variant="h6">Total Bill: {totalPrice}</Typography>
//             </Box>
//             <Button variant="contained" color="secondary" sx={{ backgroundColor: 'hotpink' }}>
//               Checkout Items
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default CartPage;













import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

  const initialCartItems = [
  
  { id: 1, name: "Banana", price: 100, quantity: 1, image: "banana_image_url" },
  { id: 2, name: "Potato", price: 170, quantity: 1, image: "potato_image_url" },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  
  const handleAddQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedItems);
  };

  const handleRemoveQuantity = (item) => {
    const updatedItems = cartItems
      .map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    setCartItems(updatedItems);
  };

  const handleDeleteItem = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalBill = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <Container>
      <Typography variant="h4" align="center" style={{ marginBottom: "20px", color: '#e91e63' }}>
        Your Cart
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Add</TableCell>
              <TableCell>Remove</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleAddQuantity(item)}
                    style={{ backgroundColor: "#e91e63", color: "#fff" }}
                  >
                    +
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleRemoveQuantity(item)}
                    style={{ backgroundColor: "#e91e63", color: "#fff" }}
                  >
                    -
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteItem(item)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Total Quantity and Bill */}
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px", textAlign: "center", backgroundColor: "#ffe6f0" }}>
            <Typography variant="h6">
              Total Quantity: <strong>{totalQuantity}</strong>
            </Typography>
            <Typography variant="h6">
              Total Bill: <strong>${totalBill}</strong>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Checkout Button */}
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#e91e63", color: "#fff" }}
        >
          CHECKOUT ITEMS
        </Button>
      </Grid>
    </Container>
  );
};

export default CartPage;
