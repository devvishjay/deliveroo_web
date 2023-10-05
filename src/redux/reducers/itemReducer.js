import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 0, name: "New daily Specials" },

  ],
  items: [
    {
      id: 0,
     image: "1696419946562_2f651647.jpg",
      category: 0,
      name: "avocado caesar chicken salad DAILY SPECIAL",
      description: "DAILY SPECIAL!!! with your chioce of chicken, avocado, parmesan crisps, baby plum tomatoes, egg, croutons, caesar dressing and lemon juice",
      calories: 432,
      contains: "eggs, gluten, milk (including lactose), soybeans",
      price: 8.99,
    }
  ],
  cart: [],
};

const itemDataSlice = createSlice({
  name: "currentItems",
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = itemDataSlice.actions;

export default itemDataSlice.reducer;
