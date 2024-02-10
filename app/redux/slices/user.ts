import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '~/axios'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (params: any) => {
    const { data } = await instance.post('/api/user/getUserProfile', params)

    return data
  }
)

const initialState = {
  user: {
    userData: {
        id: "",
        name: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        aboutMe: "",
        enctyptedID: "",
        dateOfBirth: "",
    },
    status: 'loading',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.user.status = 'loading'

      // @ts-ignore
      state.user.userData = null
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user.status = 'loaded'
      state.user.userData = action.payload
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user.status = 'error'

      // @ts-ignore
      state.user.userData = null
    })
  },
})

export const userReducer = userSlice.reducer
