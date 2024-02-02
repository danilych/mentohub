import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { courseReducer } from "./slices/courses";


const store = configureStore({
  reducer: {
    courses: courseReducer,
    auth: authReducer,
  },
});

export default store;