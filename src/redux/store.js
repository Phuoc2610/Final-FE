import authSlice from "./auth/authSlice";
import { combineReducers,configureStore  } from "@reduxjs/toolkit";
// const { configureStore } = require("@reduxjs/toolkit");
const reducer = combineReducers({
    auth: authSlice
  })
  
  
  const store = configureStore({
    reducer
  });
  

  export default store;