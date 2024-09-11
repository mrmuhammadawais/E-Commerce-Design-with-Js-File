import React from 'react'
import CardCarousel from './CarasouolCard'
import Navbar from './Navbar'

export default function Wallet() {
  return (
    <div>
    <Navbar/>
    <CardCarousel heading="The Best Wallet" category="wallets" />
    </div>
  )
}
