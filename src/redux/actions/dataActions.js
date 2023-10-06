import axiosInstance from "../../utils/axios";
import { update as updateRestaurant } from "../reducers/dataReducer";
import { update as updateItems } from "../reducers/itemReducer";
import { update as userDetails } from "../reducers/userReducer";

export const updateCurrentRestaurantAction = () => {
  return async (dispatch) => {
    const {data} = await axiosInstance.get("/api/restaurants/6");
    dispatch(updateRestaurant(data.data));
    // dispatch(updateRestaurant());
  };
};

export const updateCurrentItemAction = () => {
  return async(dispatch) => {
    const {data} = await axiosInstance.get("/api/menus/readDishes/1");

    dispatch(updateItems(data.data));
  };
};


export const updateCartItemsAction = (data) => {
  return async(dispatch) => {

    dispatch(updateItems(data));
  };
};

export const userDetailsAction = (data) => {
  return async(dispatch) => {

    dispatch(userDetails(data));
  };
};