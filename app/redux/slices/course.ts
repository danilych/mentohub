import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '~/axios'

export const createCourse = createAsyncThunk(
  'auth/fetchAuth',
  async (params: any) => {
    const { data } = await instance.post('/Course/Apply', params)

    return data
  }
)