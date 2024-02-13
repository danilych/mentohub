import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { courseReducer } from "./slices/courses";
import { userReducer } from "./slices/user";
import { courseItemReducer } from "./slices/course";
import { authorReducer } from "./slices/author";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    course: courseItemReducer,
    auth: authReducer,
    user: userReducer,
    author: authorReducer,
  },
});

export default store;