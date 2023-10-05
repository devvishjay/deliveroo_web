import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 0, name: "New daily Specials" },
    { id: 1, name: "Salads" },
    { id: 2, name: "Hot Power Bowls" },
    { id: 3, name: "Bundles" },
    { id: 4, name: "Vegan Menu" },
    { id: 5, name: "Rainbow Wraps" },
    { id: 6, name: "Snacks & Sides" },
    { id: 7, name: "Cold Drinks" },
    { id: 8, name: "Yoghurt & fruit" },
    { id: 9, name: "Smoothies, shakes & juice" },
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
    },
    {
      id: 1,
      image: "1696419946562_2f651647.jpg",
      category: 0,
      name: "pesto powergrains balance pot with chicken DAILY SPECIAL",
      description: "DAILY SPECIAL supergrains, roasted peppers, sweet potato, edamame with soy & sesame dressing and pesto topped with UK red tractor grilled chicken thigh and omega seeds",
      calories: 630,
      contains:
        "celery, gluten, milk (including lactose), sesame, soybeans, sulphur dioxide/sulphites",
      price: 7.99,
    },
    {
      id: 2,
     image: "1696419946562_2f651647.jpg",
      category: 1,
      name: "superfood salad DAILY SPECIAL",
      description: "DAILY SPECIAL! feta, beetroot, cranberry, edamame, carrot, seeds & french dressing for every salad sold we will donate 50p to Greenhouse sports",
      calories: 373,
      contains:
        "gluten, milk (including lactose), mustard, sesame, soybeans, sulphur dioxide/sulphites",
      price: 8.99,
    },
    {
      id: 3,
     image: "1696419946562_2f651647.jpg",
      category: 2,
      name: "superfood salad DAILY SPECIAL",
      description: "DAILY SPECIAL! feta, beetroot, cranberry, edamame, carrot, seeds & french dressing for every salad sold we will donate 50p to Greenhouse sports",
      calories: 373,
      contains:
        "gluten, milk (including lactose), mustard, sesame, soybeans, sulphur dioxide/sulphites",
      price: 8.99,
    },
    {
      id: 3,
     image: "1696419946562_2f651647.jpg",
      category: 3,
      name: "superfood salad DAILY SPECIAL",
      description: "DAILY SPECIAL! feta, beetroot, cranberry, edamame, carrot, seeds & french dressing for every salad sold we will donate 50p to Greenhouse sports",
      calories: 373,
      contains:
        "gluten, milk (including lactose), mustard, sesame, soybeans, sulphur dioxide/sulphites",
      price: 8.99,
    },
  ],
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
