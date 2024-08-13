import { configureStore } from "@reduxjs/toolkit";
import authReducr from "./auth";
const Store = configureStore({
  reducer: {
    auth: authReducr,
  },
});
export default Store;
