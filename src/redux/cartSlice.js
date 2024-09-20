


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0, 
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;  
      } else {
        state.items.push({ 
          ...newItem, 
          quantity: 1, 
          totalPrice: newItem.price  
        });
      }

      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity; 
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter(i => i.id !== item.id);
      }

      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      console.log('action:',action.payload)
      const existingItem = state.items.find(i => i.id === itemId);

      if (existingItem) {
        state.items = state.items.filter(i => i.id !== itemId);
      }

      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    clearCart: (state,action) => {
      console.log('state',action.payload)
      state.items = [];
      state.totalQuantity =0
      state.totalAmount = 0;

      
    }
  },
});

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
