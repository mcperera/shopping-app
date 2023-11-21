import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartStateType} from '../../types';

const initialState: CartStateType | [] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}: PayloadAction<number>) => {
      const updatedState = state;

      const checkItemIdx = updatedState.findIndex(
        cartItem => cartItem.id === payload,
      );

      if (checkItemIdx !== -1) {
        updatedState[checkItemIdx].itemCount += 1;
      } else {
        updatedState.push({
          id: payload,
          itemCount: 1,
        });
      }
      return updatedState;
    },
    removeCartItem: (state, {payload}: PayloadAction<number>) => {
      const updatedState = state;

      const checkItemIdx = updatedState.findIndex(
        cartItem => cartItem.id === payload,
      );

      if (checkItemIdx !== -1 && updatedState[checkItemIdx].itemCount === 1) {
        updatedState.splice(checkItemIdx, 1);
      } else {
        updatedState[checkItemIdx].itemCount -= 1;
      }

      return updatedState;
    },
  },
});

export const {addToCart, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
