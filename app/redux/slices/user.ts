import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    status: "loading",
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logout: (state: any) => {
        state.data = null;
  
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("id");
      },
    },
  });