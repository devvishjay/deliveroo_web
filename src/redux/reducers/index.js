import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "./dataReducer";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  currentRestaurant: dataReducer,
  currentItems: itemReducer,
  userDetails: userReducer,
});

export default rootReducer;
