// import React from 'react';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CardItem = ({ item }) => {
//     const navigate = useNavigate();

//     const handleAddToCart = () => {
//         navigate('/cart');
//     };

//     return (
//         <Card>
//             <CardContent>
//                 <Grid container justifyContent="center">
//                     <img
//                         src={item.image}
//                         alt={item.title}
//                         style={{ width: '68%', height: 'auto', objectFit: 'contain' }}
//                     />
//                 </Grid>
//                 <Typography variant="h5" component="div" align="center" style={{ marginTop: '16px' }}>
//                     {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" align="center" style={{ marginBottom: '8px' }}>
//                     {item.description}
//                 </Typography>
//                 <Typography variant="h6" component="div" align="center" color="text.primary" style={{ marginBottom: '16px' }}>
//                     {item.price}
//                 </Typography>
//                 <Grid container justifyContent="center">
//                     <Button variant="contained" color="primary" onClick={handleAddToCart}>
//                         Add to Cart
//                     </Button>
//                 </Grid>
//             </CardContent>
//         </Card>
//     );
// };

// export default CardItem;
import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { useCart } from './context/CartContext';

const CardItem = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isItemInCart = cartItems.some((cartItem) => cartItem.title === item.title);

  const handleAddToCart = () => {
    if (!isItemInCart) {
      addToCart({ title: item.title, price: item.price });
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.title);
  };

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="center">
          <img
            src={item.image}
            alt={item.title}
            style={{ width: '68%', height: 'auto', objectFit: 'contain' }}
          />
        </Grid>
        <Typography variant="h5" component="div" align="center" style={{ marginTop: '16px' }}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" style={{ marginBottom: '8px' }}>
          {item.description}
        </Typography>
        <Typography variant="h6" component="div" align="center" color="text.primary" style={{ marginBottom: '16px' }}>
          {item.price}
        </Typography>
        <Grid container justifyContent="center">
          {isItemInCart ? (
            <Button variant="outlined" color="secondary" onClick={handleRemoveFromCart}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardItem;
