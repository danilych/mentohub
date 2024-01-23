import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '~/axios'

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (params: any) => {
    const { data } = await instance.post('/api/account/login', params)

    return data
  }
)

const initialState = {
  data: null,
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: any) => {
      state.data = null

      window.localStorage.removeItem('token')
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('id')
    },
  },
  // @ts-ignore
  extraReducers: builder => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      state.status = 'loading'
      state.data = null
    })
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = 'loaded'
      state.data = action.payload
    })
    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.status = 'error'
      state.data = null
    })
  },
})

export const authReducer = authSlice.reducer
