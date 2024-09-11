import {Routes,Route} from "react-router-dom";
import React from 'react'
import Wallets from "../../Pages/Wallets";

import Laptops from "../../Pages/Laptops";
import Shirts from "../../Pages/Shirts";
import PageNotFound from "../../Pages/PageNotFound";
import HomePageComponents from "../../Pages/HomePageComponents";
import AddtoCart from "../../Pages/AddtoCart"
import Cart from "../Cart";
export default function AllRouting() {
  return (
    <div>
    
  
     
        <Routes>
      
        <Route path="/*" element={<PageNotFound/>}/> 
        <Route path="/" element={<HomePageComponents/>}/> 
        <Route path="/wallet" element={<Wallets/>}/> 
        <Route path="/laptop" element={<Laptops/>}/> 
        <Route path="/shirt" element={<Shirts/>}/> 
        <Route path="/cart" element={<AddtoCart/>}/> 
        <Route path="/cart" element={<Cart/>}/> 



        </Routes>
    
    </div>
  )
}


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react';
// import Navbar from "../Navbar";
// import Header from "../Header";
// import Home from "../../Pages/Home"; 
// import Laptops from "../../Pages/Laptops"; 
// import Wallets from "../../Pages/Wallets"; 
// import Shirts from "../../Pages/Shirts"; 
// import PageNotFound from "../../Pages/PageNotFound"; 

// export default function AllRouting() {
//   return (
//     <div>
//       <Routes>
//         <Route
//           path="/home"
//           element={
//             <>
//               <Navbar />
//               <Header />
//               <Home />
//             </>
//           }
//         />

        
//         <Route path="/laptop" element={<Laptops />} />

//         <Route path="/wallet" element={<Wallets />} />

//         <Route path="/shirt" element={<Shirts />} />

//         <Route path="/*" element={<PageNotFound />} />
//       </Routes>
//     </div>
//   );
// }
