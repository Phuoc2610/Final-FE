import authSlice from "./auth/authSlice";
import { combineReducers,configureStore  } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
// const { configureStore } = require("@reduxjs/toolkit");
const reducer = combineReducers({
    auth: authSlice,
    category: categorySlice
  })
  
  
  const store = configureStore({
    reducer
  });
  

  export default store;