import React from 'react'
import CardCarousel from './CarasouolCard'
import Navbar from './Navbar'
import { useState } from 'react'
import Cart from './Cart'

const Shirt = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

 
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  return (
    <div>
    <Cart drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    <Navbar toggleDrawer={toggleDrawer} />
 <CardCarousel heading="Stylish Shirts" category="shirts" />   
  </div>
  )
}

export default Shirt
