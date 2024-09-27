import React from "react";
import { useState } from "react";
import CardCarousel from "./CarasouolCard";
import Cart from "./Cart";
import Navbar from "./Navbar";

const Laptop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  return (
    <div>
      <Cart drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Navbar toggleDrawer={toggleDrawer} />
      <CardCarousel heading="Affordable Laptops" category="laptop" />
    </div>
  );
};

export default Laptop;
