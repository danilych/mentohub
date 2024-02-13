import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import instance from '~/axios'

export const fetchAuthor = createAsyncThunk(
  'author/fetchAuthor',
  async (params: any) => {
    const { data } = await instance.post('/Course/AuthorInfo', params)

    return data
  }
)

const initialState = {
  author: {
    data: null,
    status: 'loading',
  },
}

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAuthor.pending, (state, action) => {
      state.author.status = 'loading'

      // @ts-ignore
      state.author.data = null
    })
    builder.addCase(fetchAuthor.fulfilled, (state, action) => {
      state.author.status = 'loaded'
      state.author.data = action.payload
    })
    builder.addCase(fetchAuthor.rejected, (state, action) => {
      state.author.status = 'error'

      // @ts-ignore
      state.author.data = null
    })
  },
})

export const authorReducer = authorSlice.reducer
