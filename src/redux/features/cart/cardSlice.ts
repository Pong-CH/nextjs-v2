// action: addTocard, removeFromCart
// satte (items[], totalAmount, totalQuatity)
// reduxcer (cartSlide)

import { CartInfer } from "@/libs/cart/cart-type";
import { createSlice, PayloadAction, TaskAbortError } from "@reduxjs/toolkit";

interface itemInfer extends CartInfer {
  quantity: number;
  totalPrice: number;
}

type CartItemType = {
  totalAmount: number;
  totalQuantity: number;
  items: itemInfer[];
};

// initializeState
const initialState: CartItemType = {
  totalAmount: 0,
  totalQuantity: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartInfer>) => {
      // logic to process addToCart
      const newItem = action.payload;

      const existItem = state.items.find(
        (item: CartInfer) => item.id === newItem.id,
      );

      state.totalQuantity++;
      state.totalAmount += newItem.price;

      // check if item exists
      if (!existItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          category: newItem.category,
          description: newItem.description,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice += newItem.price;
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const existItem = state.items.find((item) => item.id === itemId);

      if (!existItem) return;

      state.totalQuantity -= existItem.quantity;
      state.totalAmount -= existItem.totalPrice;

      state.items = state.items.filter((item) => item.id !== itemId);

      if (state.items.length === 0) {
        state.totalQuantity = 0;
        state.totalAmount = 0;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
