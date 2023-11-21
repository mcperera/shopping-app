import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartStateType} from '../../types';

const initialState: CartStateType | any = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      {payload}: PayloadAction<{id: number; amount: number}>,
    ) => {
      const updatedState = state;

      const checkItemIdx = updatedState.findIndex(
        cartItem => cartItem.id === payload.id,
      );

      if (checkItemIdx !== -1) {
        updatedState[checkItemIdx].itemCount += 1;
        updatedState[checkItemIdx].totalAmount += Number(payload.amount);
      } else {
        updatedState.push({
          id: payload.id,
          itemCount: 1,
          totalAmount: Number(payload.amount),
        });
      }
      return updatedState;
    },
    removeCartItem: (
      state,
      {payload}: PayloadAction<{id: number; amount: number}>,
    ) => {
      const updatedState = state;

      const checkItemIdx = updatedState.findIndex(
        cartItem => cartItem.id === payload.id,
      );

      if (checkItemIdx !== -1 && updatedState[checkItemIdx].itemCount === 1) {
        updatedState.splice(checkItemIdx, 1);
      } else {
        updatedState[checkItemIdx].itemCount -= 1;
        updatedState[checkItemIdx].totalAmount -= payload.amount;
      }

      return updatedState;
    },
  },
});

export const {addToCart, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
