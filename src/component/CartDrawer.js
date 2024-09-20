// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, removeItem, deleteItem, clearCart } from '../redux/cartSlice';
// import { Button, Snackbar, Alert, Drawer } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const items = useSelector((state) => state.cart.items);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();  // To detect route changes

//   const [drawerOpen, setDrawerOpen] = React.useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [message, setMessage] = React.useState('');
//   const [severity, setSeverity] = React.useState('success');

//   const handleAdd = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemove = (item) => {
//     dispatch(removeItem(item));
//   };

//   const handleDelete = (itemId) => {
//     dispatch(deleteItem(itemId));
//   };

//   const handleCheckout = () => {
//     if (items.length > 0) {
//       setMessage('Your order is successfully processed!');
//       setSeverity('success');
//       setOpen(true);
//       dispatch(clearCart());
//       navigate('/confirmation');
//     } else {
//       setMessage('Please add some products to the cart.');
//       setSeverity('warning');
//       setOpen(true);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   // Open the drawer when navigating to /cart
//   useEffect(() => {
//     if (location.pathname === '/cart') {
//       setDrawerOpen(true);  // Open the drawer when navigating to /cart
//     } else {
//       setDrawerOpen(false); // Close the drawer when leaving /cart
//     }
//   }, [location]);

//   return (
//     <div>
//       {/* Other Navigation Links */}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => navigate('/cart')} // Navigate to /cart which will open the drawer
//       >
//         Go to Cart
//       </Button>

//       {/* Drawer containing the cart */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <div style={styles.cartContainer}>
//           <h2 style={styles.heading}>Your Cart</h2>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Name</th>
//                 <th>Quantity</th>
//                 <th>Total Price</th>
//                 <th>Add</th>
//                 <th>Remove</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item) => (
//                 <tr key={item.id} style={styles.row}>
//                   <td>
//                     <img src={item.image} alt={item.title} style={styles.image} />
//                   </td>
//                   <td>{item.title}</td>
//                   <td>{item.quantity}</td>
//                   <td>${item.price * item.quantity}</td>
//                   <td>
//                     <button onClick={() => handleAdd(item)} style={styles.button}>
//                       +
//                     </button>
//                   </td>
//                   <td>
//                     <button onClick={() => handleRemove(item)} style={styles.button}>
//                       -
//                     </button>
//                   </td>
//                   <td>
//                     <button onClick={() => handleDelete(item.id)} style={styles.deleteButton}>
//                       DELETE
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div style={styles.summaryContainer}>
//             <div style={styles.summaryBox}>
//               <p>Total Quantity: {totalQuantity}</p>
//               <p>Total Bill: ${totalAmount}</p>
//             </div>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleCheckout}
//               style={styles.checkoutButton}
//             >
//               CHECKOUT ITEMS
//             </Button>
//           </div>
//         </div>
//       </Drawer>

//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity={severity}>
//           {message}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// const styles = {
//   cartContainer: {
//     padding: '20px',
//     width: '400px',
//     maxWidth: '100%',
//     backgroundColor: '#f9f9f9',
//   },
//   heading: {
//     color: '#E91E63',
//     textAlign: 'center',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginBottom: '20px',
//   },
//   row: {
//     textAlign: 'center',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//     objectFit: 'cover',
//     borderRadius: '5px',
//   },
//   button: {
//     padding: '5px 10px',
//     backgroundColor: '#f0f0f0',
//     border: '1px solid #ccc',
//     cursor: 'pointer',
//   },
//   deleteButton: {
//     padding: '5px 10px',
//     backgroundColor: '#ff4d4d',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//   },
//   summaryContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: '20px',
//   },
//   summaryBox: {
//     backgroundColor: '#ff3366',
//     color: '#fff',
//     padding: '10px',
//     borderRadius: '5px',
//   },
//   checkoutButton: {
//     padding: '10px 20px',
//     backgroundColor: '#E91E63',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//   },
// };

// export default Cart;
