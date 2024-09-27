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
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
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

const products = [
  {
    id: 1,
    title: "HP-i5 5th Generation",
    description: "High-performance laptop for professionals",
    price: "$85",
    discountPrice: "$50",
    image: Laptop5,
    category: "laptop",
    stock: 50,
  },
  {
    id: 2,
    title: "Dell i-7 7th Generation",
    description: "Gaming laptop with high-end graphics for professional",
    price: "$100",
    discountPrice: "$90",
    image: Laptop6,
    category: "laptop",
    stock: 50,
  },
  {
    id: 3,
    title: "Dell i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$40",
    discountPrice: "$35",
    image: Laptop4,
    category: "laptop",
    stock: 50,
  },
  {
    id: 4,
    title: "Lenovo i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$100",
    discountPrice: "$95",
    image: Laptop3,
    category: "laptop",
    stock: 50,
  },
  {
    id: 5,
    title: "Lenovo i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$125",
    discountPrice: "$110",
    image: Laptop2,
    category: "laptop",
    stock: 50,
  },
  {
    id: 6,
    title: "Lenovo i-3 5th Generation",
    description: "Compact and portable laptop for travel",
    price: "$115",
    discountPrice: "$105",
    image: Laptop1,
    category: "laptop",
    stock: 50,
  },
  {
    id: 7,
    title: "Sleeve Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$20",
    discountPrice: "$18",
    image: Shirts1,
    category: "shirts",
    stock: 50,
  },
  {
    id: 8,
    title: "T-Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$30",
    discountPrice: "$25",
    image: Shirts2,
    category: "shirts",
    stock: 50,
  },
  {
    id: 9,
    title: "Versatile Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$40",
    discountPrice: "$35",
    image: Shirts3,
    category: "shirts",
    stock: 50,
  },
  {
    id: 10,
    title: "Casual Shirt",
    description: "Bold, Comfy, Stylish, Versatile",
    price: "$50",
    discountPrice: "$45",
    image: Shirts4,
    category: "shirts",
    stock: 50,
  },
  {
    id: 11,
    title: "Variety of Shirts",
    description: "Simple, Sleek, Everyday Essential",
    price: "$60",
    discountPrice: "$55",
    image: Shirts5,
    category: "shirts",
    stock: 50,
  },
  {
    id: 12,
    title: "Premium T-Shirts",
    description: "Casual, Trendy, Effortless Cool",
    price: "$70",
    discountPrice: "$65",
    image: Shirts6,
    category: "shirts",
    stock: 50,
  },
  {
    id: 13,
    title: "UrbanVault Wallet",
    description: "Elegant and Durable",
    price: "$80",
    discountPrice: "$75",
    image: Wallet1,
    category: "wallets",
    stock: 50,
  },
  {
    id: 14,
    title: "Slim Guard Wallet",
    description: "Elegant and Durable",
    price: "$5",
    discountPrice: "$4",
    image: Wallet2,
    category: "wallets",
    stock: 50,
  },
  {
    id: 15,
    title: "Flexi Fold Wallet",
    description: "Elegant and Durable",
    price: "$10",
    discountPrice: "$8",
    image: Wallet3,
    category: "wallets",
    stock: 50,
  },
  {
    id: 16,
    title: "Classic Leather Wallet",
    description: "Elegant and Durable",
    price: "$15",
    discountPrice: "$12",
    image: Wallet4,
    category: "wallets",
    stock: 50,
  },
  {
    id: 17,
    title: "Eclipse Slim Wallet",
    description: "Compact and Stylish",
    price: "$20",
    discountPrice: "$18",
    image: Wallet5,
    category: "wallets",
    stock: 50,
  },
  {
    id: 18,
    title: "Prime Edge Wallet",
    description: "Premium Leather Wallet",
    price: "$25",
    discountPrice: "$22",
    image: Wallet6,
    category: "wallets",
    stock: 50,
  },
];

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.cart.products.find((p) => p.id === item.id)
  );

  if (!product) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5">Product Not Found</Typography>
        </CardContent>
      </Card>
    );
  }

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addItem(product));
    }
  };
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "150px", height: "150px" }}
          />
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {item.description}
          </Typography>
          <Typography variant="body1">
            <s>Price: {item.price}</s>
          </Typography>
          <Typography variant="body1" style={{ color: "red" }}>
            Discount Price: {item.discountPrice}
          </Typography>
          <Typography variant="body1" style={{ color: "red" }}>
            Stock: {product.stock}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
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
          {items.map((_, index) => {
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
          })}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

const CardCategoryDisplay = ({ heading, category, items, onMoreClick }) => {
  const displayedItems = category ? items.slice(0, 3) : items;

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
        <Button
          variant="outlined"
          color="primary"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={onMoreClick}
        >
          More
        </Button>
      </Grid>
    </div>
  );
};

const CardCarousel = ({ heading, category }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupItems, setPopupItems] = useState([]);

  const handleMoreClick = (category) => {
    const remainingItems = products.filter(
      (item) => item.category === category
    );
    setPopupItems(remainingItems);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <CardCategoryDisplay
        key={category ?? ""}
        heading={heading ?? ""}
        category={category ?? ""}
        items={
          category
            ? products.filter((item) => item.category === category)
            : products
        }
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
