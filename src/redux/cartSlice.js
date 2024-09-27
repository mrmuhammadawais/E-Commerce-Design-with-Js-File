import { createSlice } from "@reduxjs/toolkit";
import Laptop1 from "../images/laptop1.jpg";
import Laptop2 from "../images/laptop2.jpg";
import Laptop3 from "../images/laptop3.jpg";
import Laptop4 from "../images/laptop4.jpg";
import Laptop5 from "../images/laptop5.jpg";
import Laptop6 from "../images/laptop6.jpg";
import Shirts1 from "../images/shirt1.jpg";
import Shirts2 from "../images/shirt2.jpg";
import Shirts3 from "../images/shirt3.jpg";
import Shirts4 from "../images/shirt4.jpg";
import Shirts5 from "../images/shirt5.jpg";
import Shirts6 from "../images/shirt6.jpg";
import Wallet1 from "../images/wallet1.jpg";
import Wallet2 from "../images/wallet2.jpg";
import Wallet3 from "../images/wallet3.jpg";
import Wallet4 from "../images/wallet4.jpg";
import Wallet5 from "../images/wallet5.jpg";
import Wallet6 from "../images/wallet6.jpg";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
    products: [
  { id: 1,image:Laptop1, title: "HP i5 5th Generation", stock: 50, price: 50, discountPrice: 50, },
  { id: 2, image:Laptop2,title: "Dell i7 7th Generation", stock: 50, price: 90, discountPrice: 90 },
  { id: 3,image:Laptop3, title: "Dell i3 5th Generation", stock: 50, price: 35, discountPrice: 35 },
  { id: 4,image:Laptop4, title: "Lenovo i-3 5th Generation", stock: 50, price: 95, discountPrice: 35 },
  { id: 5,image:Laptop5, title: "Lenovo i3 5th Generation", stock: 50, price: 110, discountPrice: 35 },
  { id: 6,image:Laptop6, title: "Lenovo i3 5th Generation", stock: 50, price: 105, discountPrice: 35 },
  { id: 7,image:Shirts1, title: "Sleeve Shirt", stock: 50, price: 18, discountPrice: 35 },
  { id: 8,image:Shirts2, title: "T-Shirt", stock: 50, price: 25, discountPrice: 35 },
  { id: 9,image:Shirts3, title: "Versatile Shirt", stock: 50, price: 35, discountPrice: 35 },
  { id: 10,image:Shirts4, title: "Casual Shirt", stock: 50, price: 45, discountPrice: 35 },
  { id: 11,image:Shirts5, title: "Vareity of Shirts", stock: 50, price: 55, discountPrice: 35 },
  { id: 12,image:Shirts6, title: "Premium T-Shirt", stock: 50, price:65, discountPrice: 35 },
  { id: 13,image:Wallet1, title: "UrbanVault Wallet", stock: 50, price: 75, discountPrice: 35 },
  { id: 14,image:Wallet2, title: "Slim Guard Wallet", stock: 50, price: 4, discountPrice: 35 },
  { id: 15,image:Wallet3, title: "Flexi Fold Wallet", stock: 50, price: 8, discountPrice: 35 },
  { id: 16,image:Wallet4, title: "Classic Leather Wallet", stock: 50, price: 12, discountPrice: 35 },
  { id: 17,image:Wallet5, title: "Eclipse Slim Wallet", stock: 50, price: 18, discountPrice: 35 },
  { id: 18,image:Wallet6, title: "Prime Edge Wallet", stock: 50, price: 22, discountPrice: 35 },

]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product && product.stock > 0) {
        const cartItem = state.items.find((item) => item.id === product.id);

        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          state.items.push({
            ...product,
            quantity: 1,
          });
        }

        product.stock -= 1;  
        state.totalQuantity += 1;
        state.totalAmount += product.discountPrice;
      }
    },
    increaseItem: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      const product = state.products.find((p) => p.id === action.payload);

      if (cartItem && product && product.stock > 0) {
        cartItem.quantity += 1;
        product.stock -= 1; 
        state.totalQuantity += 1;
        state.totalAmount += cartItem.discountPrice;
      }
    },
    decreaseItem: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      const product = state.products.find((p) => p.id === action.payload);

      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity -= 1;
        product.stock += 1; 
        state.totalQuantity -= 1;
        state.totalAmount -= cartItem.discountPrice;
              }
    },
    deleteItem: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      const product = state.products.find((p) => p.id === action.payload);

      if (cartItem) {
        product.stock += cartItem.quantity;  
        state.totalQuantity -= cartItem.quantity;
        state.totalAmount -= cartItem.quantity * cartItem.discountPrice;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    checkout: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, increaseItem, decreaseItem, deleteItem, checkout } = cartSlice.actions;
export default cartSlice.reducer;
  
