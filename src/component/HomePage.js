// import React, { useState } from "react";
// import Carousel from "react-material-ui-carousel";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Dialog,
//   DialogContent,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// import Laptop from "../images/laptop.jpg";
// import Laptop2 from "../images/laptop1.jpg";
// import Laptop3 from "../images/laptop2.jpg";
// import Shirts from "../images/shirt.jpg";
// import Shirts2 from "../images/shirt1.jpg";
// import Shirts3 from "../images/shirt2.jpg";
// import Wallet1 from "../images/wallet.jpg";
// import Wallet2 from "../images/wallet1.jpg";
// import Wallet3 from "../images/wallet2.jpg";

// const cardItems = [
//   {
//     title: "HP-i5 5th Generation",
//     description: "High-performance laptop for professionals",
//     price: "$1000",
//     image: Laptop,
//     category: "laptop",
//   },

//   {
//     title: "Dell i-7 7th Generation",
//     description: "Gaming laptop with high-end graphics",
//     price: "$1200",
//     image: Laptop2,
//     category: "laptop",
//   },
//   {
//     title: "Lenovo i-3 5th Generation",
//     description: "Compact and portable laptop for travel",
//     price: "$800",
//     image: Laptop3,
//     category: "laptop",
//   },
//   {
//     title: "Lenovo i-3 5th Generation",
//     description: "Compact and portable laptop for travel",
//     price: "$800",
//     image: Laptop3,
//     category: "laptop",
//   },
//   {
//     title: "Lenovo i-3 5th Generation",
//     description: "Compact and portable laptop for travel",
//     price: "$800",
//     image: Laptop3,
//     category: "laptop",
//   },
//   {
//     title: "Lenovo i-3 5th Generation",
//     description: "Compact and portable laptop for travel",
//     price: "$800",
//     image: Laptop3,
//     category: "laptop",
//   },
  
//   {
//     title: "T-Shirt",
//     description: "Bold, Comfy, Stylish, Versatile",
//     price: "$20",
//     image: Shirts,
//     category: "shirts",
//   },
//   {
//     title: "T-Shirt",
//     description: "Bold, Comfy, Stylish, Versatile",
//     price: "$20",
//     image: Shirts,
//     category: "shirts",
//   },
//   {
//     title: "T-Shirt",
//     description: "Bold, Comfy, Stylish, Versatile",
//     price: "$20",
//     image: Shirts,
//     category: "shirts",
//   },
//   {
//     title: "T-Shirt",
//     description: "Bold, Comfy, Stylish, Versatile",
//     price: "$20",
//     image: Shirts,
//     category: "shirts",
//   },
//   {
//     title: "Variety of Shirts",
//     description: "Simple, Sleek, Everyday Essential",
//     price: "$25",
//     image: Shirts2,
//     category: "shirts",
//   },
//   {
//     title: "Premium T-Shirts",
//     description: "Casual, Trendy, Effortless Cool",
//     price: "$30",
//     image: Shirts3,
//     category: "shirts",
//   },
//   {
//     title: "UrbanVault Wallet",
//     description: "Elegant and Durable",
//     price: "$50",
//     image: Wallet1,
//     category: "wallets",
//   },
//   {
//     title: "UrbanVault Wallet",
//     description: "Elegant and Durable",
//     price: "$50",
//     image: Wallet1,
//     category: "wallets",
//   },
//   {
//     title: "UrbanVault Wallet",
//     description: "Elegant and Durable",
//     price: "$50",
//     image: Wallet1,
//     category: "wallets",
//   },
//   {
//     title: "UrbanVault Wallet",
//     description: "Elegant and Durable",
//     price: "$50",
//     image: Wallet1,
//     category: "wallets",
//   },
//   {
//     title: "Slim Guard Wallet",
//     description: "Compact and Stylish",
//     price: "$55",
//     image: Wallet2,
//     category: "wallets",
//   },
//   {
//     title: "Flexi Fold Wallet",
//     description: "Premium Leather Wallet",
//     price: "$60",
//     image: Wallet3,
//     category: "wallets",
//   },
// ];

// const CardItem = ({ item }) => {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Grid container justifyContent="center">
//           <img
//             src={item.image}
//             alt={item.title}
//             style={{ width: "68%", height: "auto", objectFit: "contain" }}
//           />
//         </Grid>
//         <Typography
//           variant="h5"
//           component="div"
//           align="center"
//           style={{ marginTop: "16px" }}
//         >
//           {item.title}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           align="center"
//           style={{ marginBottom: "8px" }}
//         >
//           {item.description}
//         </Typography>
//         <Typography
//           variant="h6"
//           component="div"
//           align="center"
//           color="text.primary"
//           style={{ marginBottom: "16px" }}
//         >
//           {item.price}
//         </Typography>
//         <Grid container justifyContent="center">
//           <Button variant="contained" color="primary" onClick={handleAddToCart}>
//             Add to Cart
//           </Button>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// const CardCarouselPopup = ({ open, handleClose, items }) => {
//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//       <DialogContent>
//         <Carousel navButtonsAlwaysVisible>
//           <Grid container spacing={2}>
//             {items.map((item, i) => (
//               <Grid item xs={12} sm={4} key={i}>
//                 <CardItem item={item} />
//               </Grid>
//             ))}
//           </Grid>
//         </Carousel>
//       </DialogContent>
//     </Dialog>
//   );
// };

// const CardCategoryDisplay = ({ heading, category, items, onMoreClick }) => {
//   const displayedItems = items.slice(0, 3);

//   return (
//     <div style={{ marginBottom: "40px" }}>
//       <Typography
//         variant="h4"
//         component="h2"
//         align="center"
//         style={{ marginBottom: "16px", marginTop: "16px" }}
//       >
//         {heading}
//       </Typography>
//       <Grid container spacing={2}>
//         {displayedItems.map((item, i) => (
//           <Grid item xs={12} sm={4} key={i}>
//             <CardItem item={item} />
//           </Grid>
//         ))}
//       </Grid>
//       <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
//         <Button variant="outlined" color="primary" onClick={onMoreClick}>
//           More
//         </Button>
//       </Grid>
//     </div>
//   );
// };

// const HomePage = () => {
//   const [openPopup, setOpenPopup] = useState(false);
//   const [popupItems, setPopupItems] = useState([]);

//   const handleMoreClick = (category) => {
//     const remainingItems = cardItems
//       .filter((item) => item.category === category)
//       .slice(3);
//     setPopupItems(remainingItems);
//     setOpenPopup(true);
//   };

//   const handleClosePopup = () => {
//     setOpenPopup(false);
//   };

//   const categories = [
//     { heading: "Laptops", category: "laptop" },
//     { heading: "Shirts", category: "shirts" },
//     { heading: "Wallets", category: "wallets" },
//   ];

//   return (
//     <>
//       {categories.map(({ heading, category }) => (
//         <CardCategoryDisplay
//           key={category}
//           heading={heading}
//           category={category}
//           items={cardItems.filter((item) => item.category === category)}
//           onMoreClick={() => handleMoreClick(category)}
//         />
//       ))}

//       <CardCarouselPopup
//         open={openPopup}
//         handleClose={handleClosePopup}
//         items={popupItems}
//       />
//     </>
//   );
// };

// export default HomePage;
