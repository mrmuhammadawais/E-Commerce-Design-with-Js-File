import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import CardCarousel from "./CarasouolCard";
import { colors } from "@mui/material";

export default function HomePageComponent() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <CardCarousel/> */}
      {/* <CardCarousel heading="Laptops" category="laptop" />
      <CardCarousel heading="Shirts" category="shirts" />
      <CardCarousel heading="Wallets" category="wallets" /> */}
      {/* <CardCarousel/> */}
      <CardCarousel style={{color:"white"}} heading="Laptops" category="laptop"  />
      <CardCarousel heading="Shirts" category="shirts" />
      <CardCarousel heading="Wallets" category="wallets" />
   
    </div>
  );
}
