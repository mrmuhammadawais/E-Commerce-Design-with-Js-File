import React from 'react'    
// import Wallet from '../component/Wallet'
// import Shirt from '../component/Shirt'
// import Laptop from '../component/Laptop'
import Laptops from './Laptops'
import Wallets from './Wallets'
import Shirts from './Shirts'
import PageNotFound from './PageNotFound'
import HomePageComponents from './HomePageComponents'
import AddtoCart from './AddtoCart'
const Home = () => {
  return (
    <div>
      <Laptops/>
      <Wallets/>
      <Shirts/>
      <PageNotFound/>
      <HomePageComponents/>
      <AddtoCart/>
     
    </div>
  )
}

export default Home
