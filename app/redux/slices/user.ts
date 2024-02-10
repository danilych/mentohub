import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import instance from '~/axios'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (params: any) => {
    const { data } = await instance.post('/api/user/getUserProfile', params)

    data.dateOfBirth = moment(data.dateOfBirth).format('YYYY-MM-DD')

    return data
  }
)

const initialState = {
  user: {
    data: null,
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
      state.user.data = null
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user.status = 'loaded'
      state.user.data = action.payload
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user.status = 'error'

      // @ts-ignore
      state.user.data = null
    })
  },
})

export const userReducer = userSlice.reducer
