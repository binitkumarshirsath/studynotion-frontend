import { combineReducers } from "@reduxjs/toolkit";

// import reducers from slices
import authReducer from "src/store/slices/authSlice";
import profileReducer from "src/store/slices/profileSlice";
import cartReducer from "src/store/slices/cartSlice";
import courseReducer from "src/store/slices/courseSlice";

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  cartReducer,
  courseReducer,
});

export default rootReducer;
