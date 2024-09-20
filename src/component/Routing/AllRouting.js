import {Routes,Route} from "react-router-dom";
import React from 'react'
import Wallets from "../../Pages/Wallets";

import Laptops from "../../Pages/Laptops";
import Shirts from "../../Pages/Shirts";
import PageNotFound from "../../Pages/PageNotFound";
import HomePageComponents from "../../Pages/HomePageComponents";

import Carting from "../../Pages/Carting";
import Confirmation from "../Confirmation";
export default function AllRouting() {
   
   
  
  return (
    <div>
 
    
     
        <Routes>
      
        <Route path="/*" element={<PageNotFound/>}/> 
        <Route path="/" element={<HomePageComponents/>}/> 
        <Route path="/home" element={<HomePageComponents/>}/> 
        <Route path="/wallet" element={<Wallets/>}/> 
        <Route path="/laptop" element={<Laptops/>}/> 
        <Route path="/shirt" element={<Shirts/>}/> 
        <Route path="/cart" element={<Carting />} />
        <Route path="/confirmation" element={<Confirmation/>}/>
       {/* <Route path="/carasoul" element={<CardCarousel/>}></Route> */}


        </Routes>
    
    </div>
  )
}

