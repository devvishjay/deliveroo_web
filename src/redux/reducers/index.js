import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "./dataReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  currentRestaurant: dataReducer,
  currentItems: itemReducer,
});

export default rootReducer;
