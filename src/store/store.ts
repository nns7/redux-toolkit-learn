import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slice/counterSlice";
import { usersSlice } from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    users: usersSlice.reducer,
  },
});
