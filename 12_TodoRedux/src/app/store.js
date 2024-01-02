// initial store config
import { configureStore } from "@reduxjs/toolkit";
// corrected import statement for todoSlice
// method -1
// import  {todoSlice}  from "../features/TodoSlice";
// method-2
import  todoReducers  from "../features/TodoSlice";

// act as a registory and single source of truth
// it only keeps track mentioned reducer
//  not making others change or modify with them
export const store = configureStore({
  // method-1
  // reducer: todoSlice.reducer // Access the reducer property of todoSlice
  // method-2
  reducer: todoReducers // Access the reducer property of todoSlice
});
