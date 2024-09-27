import React from "react";
import CardCarousel from "./CarasouolCard";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";
export default function Wallet() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  return (
    <div>
      <Cart drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Navbar toggleDrawer={toggleDrawer} />
      <CardCarousel heading="The Best Wallet" category="wallets" />
    </div>
  );
}
