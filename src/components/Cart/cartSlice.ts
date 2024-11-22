import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDishCart, IDishState } from '../../types.ts';

interface ICartSlice {
  cartDishes: IDishCart[];
}

const initialState: ICartSlice = {
  cartDishes: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDishToCart: (state, { payload }: PayloadAction<IDishState>) => {
      const existingIndex = state.cartDishes.findIndex((dish) => dish.dish.id === payload.id);
      if (existingIndex === -1) {
        state.cartDishes = [...state.cartDishes, { dish: payload, amount: 1 }];
      } else {
        state.cartDishes = state.cartDishes.map((item) => {
          if (item.dish.id === payload.id) {
            return {
              ...item,
              amount: ++item.amount,
            };
          }
          return item;
        });
      }
    },

    clearCart: (state) => {
      state.cartDishes = [];
    },
    deleteFromCart: (state, { payload }) => {
      state.cartDishes = state.cartDishes.filter((dish) => dish.dish.id !== payload.id);
    },
  },
  selectors: {
    selectCartDishes: (state) => state.cartDishes,
  },
});

export const cartReducer = cartSlice.reducer;
export const { addDishToCart, clearCart, deleteFromCart } = cartSlice.actions;
export const { selectCartDishes } = cartSlice.selectors;
