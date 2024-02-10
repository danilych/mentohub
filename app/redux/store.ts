import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { courseReducer } from "./slices/courses";
import { userReducer } from "./slices/user";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;