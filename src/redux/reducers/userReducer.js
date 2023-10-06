import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
}

const userDataSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = userDataSlice.actions;

export default userDataSlice.reducer;
