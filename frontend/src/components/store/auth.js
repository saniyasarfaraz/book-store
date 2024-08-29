// import { createSlice } from "@reduxjs/toolkit";
// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isLoggedIn: false, role: "user" },
//   reducers: {
//     login(state) {
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//     },
//     changeRole(state, action) {
//       const role = action.payload;
//       state.role = role;
//     },
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  role: localStorage.getItem("role") || "user",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = "user";
      // Clear localStorage on logout
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("role");
    },
    changeRole(state, action) {
      const role = action.payload;
      state.role = role;
      localStorage.setItem("role", role); // Persist role to localStorage
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
