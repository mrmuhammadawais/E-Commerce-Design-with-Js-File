// import React from "react";
// import { useState } from "react";
// import Navbar from "./Navbar";
// import Header from "./Header";
// import CardCarousel from "./CarasouolCard";
// import Cart from "./Cart";

// export default function HomePageComponent() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };
//   return (
   
//     <div>
     

//   <Cart drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
//   <Navbar toggleDrawer={toggleDrawer} />
//       <Header />

     
//       <CardCarousel style={{color:"white"}} heading="Laptops" category="laptop"  />
//       <CardCarousel heading="Shirts" category="shirts" />
//       <CardCarousel heading="Wallets" category="wallets" />
      
    
   
//     </div>
    
//   );
// }







import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import CardCarousel from "./CarasouolCard";
import Cart from "./Cart";

export default function HomePageComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

 
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <div>
      
      <Cart drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

   
      <Navbar toggleDrawer={toggleDrawer} />

      <Header />
      <CardCarousel style={{ color: "white" }} heading="Laptops" category="laptop" />
      <CardCarousel heading="Shirts" category="shirts" />
      <CardCarousel heading="Wallets" category="wallets" />
    </div>
  );
}





















