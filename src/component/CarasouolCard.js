

import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Laptop1 from "../images/laptop1.jpg";
import Laptop2 from "../images/laptop2.jpg";
import Laptop3 from "../images/laptop3.jpg";
import Laptop4 from "../images/laptop4.jpg";
import Laptop5 from "../images/laptop5.jpg";
import Laptop6 from "../images/laptop6.jpg";
import Shirts1 from "../images/shirt1.jpg";
import Shirts2 from "../images/shirt2.jpg";
import Shirts3 from "../images/shirt3.jpg";
import Shirts4 from "../images/shirt4.jpg";
import Shirts5 from "../images/shirt5.jpg";
import Shirts6 from "../images/shirt6.jpg";
import Wallet1 from "../images/wallet1.jpg";
import Wallet2 from "../images/wallet2.jpg";
import Wallet3 from "../images/wallet3.jpg";
import Wallet4 from "../images/wallet4.jpg";
import Wallet5 from "../images/wallet5.jpg";
import Wallet6 from "../images/wallet6.jpg";

const cardItems = [
  {
    title: "HP-i5 5th Generation",
    description: "High-performance laptop for professionals",
    price: "$1000",
    image: Laptop5,
    category: "laptop",
  },

  {
    title: "Dell i-7 7th Generation",
    description: "Gaming laptop with high-end graphics for professional",
    price: "$1200",
    image: Laptop6,
    category: "laptop",
  },
  {
    title: "Dell i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$800",
    image: Laptop4,
    category: "laptop",
  },
  {
    title: "Lenovo i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$800",
    image: Laptop3,
    category: "laptop",
  },
  {
    title: "Lenovo i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$800",
    image: Laptop2,
    category: "laptop",
  },
  {
    title: "Lenovo i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$800",
    image: Laptop1,
    category: "laptop",
  },

  {
    title: "T-Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$20",
    image: Shirts1,
    category: "shirts",
  },
  {
    title: "T-Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$20",
    image: Shirts2,
    category: "shirts",
  },
  {
    title: "T-Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$20",
    image: Shirts3,
    category: "shirts",
  },
  {
    title: "T-Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$20",
    image: Shirts4,
    category: "shirts",
  },
  {
    title: "Variety of Shirts",
    description: "Simple, Sleek, Everyday Essential",
    price: "$25",
    image: Shirts5,
    category: "shirts",
  },
  {
    title: "Premium T-Shirts",
    description: "Casual, Trendy, Effortless Cool",
    price: "$30",
    image: Shirts6,
    category: "shirts",
  },
  {
    title: "UrbanVault Wallet",
    description: "Elegant and Durable",
    price: "$50",
    image: Wallet1,
    category: "wallets",
  },
  {
    title: "UrbanVault Wallet",
    description: "Elegant and Durable",
    price: "$50",
    image: Wallet2,
    category: "wallets",
  },
  {
    title: "UrbanVault Wallet",
    description: "Elegant and Durable",
    price: "$50",
    image: Wallet3,
    category: "wallets",
  },
  {
    title: "UrbanVault Wallet",
    description: "Elegant and Durable",
    price: "$50",
    image: Wallet4,
    category: "wallets",
  },
  {
    title: "Slim Guard Wallet",
    description: "Compact and Stylish",
    price: "$55",
    image: Wallet5,
    category: "wallets",
  },
  {
    title: "Flexi Fold Wallet",
    description: "Premium Leather Wallet",
    price: "$60",
    image: Wallet6,
    category: "wallets",
  },
];

const CardItem = ({ item }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="center">
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "50%", height: "auto", objectFit: "contain" }}
          />
        </Grid>
        <Typography
          variant="h5"
          component="div"
          align="center"
          style={{ marginTop: "16px" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          style={{ marginBottom: "8px" }}
        >
          {item.description}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          align="center"
          color="text.primary"
          style={{ marginBottom: "16px" }}
        >
          {item.price}
        </Typography>
        <Grid container justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};


const CardCarouselPopup = ({ open, handleClose, items }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Carousel navButtonsAlwaysVisible>
          {
            // Divide items into groups of 3 per slide
            items.map((_, index) => {
              // Grouping logic: get 3 items per slide
              const itemSlice = items.slice(index * 3, index * 3 + 3);

              return (
                itemSlice.length > 0 && (
                  <Grid container spacing={2} key={index}>
                    {itemSlice.map((item, i) => (
                      <Grid item xs={12} sm={4} key={i}>
                        <CardItem item={item} />
                      </Grid>
                    ))}
                  </Grid>
                )
              );
            })
          }
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

const CardCategoryDisplay = ({ heading, category, items, onMoreClick }) => {
  // const displayedItems = items.slice(0, 3);
  const displayedItems = category?items.slice(0, 3): items;
  console.log(displayedItems)

  return (
    <div style={{ marginBottom: "40px" }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        style={{ marginBottom: "16px", marginTop: "16px" }}
      >
        {heading}
      </Typography>
      <Grid container spacing={2}>
        {displayedItems.map((item, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
     

      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Button variant="outlined" color="primary" style={{backgroundColor:"black",color:"white"}}  onClick={onMoreClick}>
          More
        </Button>
      </Grid>
      
    </div>
  );
};

const CardCarousel = ({ heading, category }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupItems, setPopupItems] = useState([]);

  console.log('card items: ',cardItems)
  console.log('category: ',category)

  const handleMoreClick = (category) => {
    const remainingItems = cardItems.filter((item) => item.category === category);
    setPopupItems(remainingItems);    
    setOpenPopup(true);
  };
  
  

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const categories = [
    { heading: "Laptops", category: "laptop" },
    { heading: "Shirts", category: "shirts" },
    { heading: "Wallets", category: "wallets" },
  ];

  return (
    <>
      <CardCategoryDisplay
        key={category??''}
        heading={heading??''}
        category={category??''}
        // items={cardItems}
        items={category?cardItems.filter((item) => item.category === category):cardItems}
        // items={category?cardItems.filter((item) => item.category === category):cardItems}
        onMoreClick={() => handleMoreClick(category)}
      />

      <CardCarouselPopup
        open={openPopup}
       
        handleClose={handleClosePopup}
        items={popupItems}
      />
    </>
  );
};

export default CardCarousel;

