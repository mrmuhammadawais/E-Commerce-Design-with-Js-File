import React from "react";

import Laptops from "./Laptops";
import Wallets from "./Wallets";
import Shirts from "./Shirts";
import PageNotFound from "./PageNotFound";
import HomePageComponents from "./HomePageComponents";
import AddtoCart from "./AddtoCart";
const Home = () => {
  return (
    <div>
      <Laptops />
      <Wallets />
      <Shirts />
      <PageNotFound />
      <HomePageComponents />
      <AddtoCart />
    </div>
  );
};

export default Home;
