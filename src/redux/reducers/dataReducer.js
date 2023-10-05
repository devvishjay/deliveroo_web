import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Anderson LLC",
  openTime: "09:00 AM",
  closeTime: "10:00 PM",
  address: "80041 Drew Plains",
  city: "West Hilma",
  country: "Australia",
  longitute: "-69.218",
  latitute: "71.8487",
  deliveryRatePerMile: 7,
  tags: [
      "Chicken",
      "Salads",
      "Healthy"
  ],
  bannerImage: "1696415561328_381eb6fe.jpg",
}

const restaurantDataSlice = createSlice({
  name: "currentRestaurant",
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = restaurantDataSlice.actions;

export default restaurantDataSlice.reducer;
