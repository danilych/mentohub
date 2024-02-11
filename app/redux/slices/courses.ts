import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '~/axios'

export const createCourse = createAsyncThunk(
  'course/createCourse',
  async (params: any) => {
    const { data } = await instance.post('/Course/Apply', params)

    return data
  }
)

export const fetchFamousCourses = createAsyncThunk(
  'course/fetchFamousCourses',
  async () => {
    const { data } = await instance.get('/Home/GetMostFamoustCourseList')

    return data
  }
)

export const fetchCourse = createAsyncThunk(
  'course/fetchCourse',
  async (params: any) => {
    const { data } = await instance.post('/Course/ViewCourse', params)

    return data
  }
)

export const fetchBoughtCourse = createAsyncThunk(
  'course/fetchBoughtCourse',
  async (params: any) => {
    const { data } = await instance.post('/Course/GetUserBoughtCourses', params)

    return data
  }
)

export const fetchAuthorCourse = createAsyncThunk(
  'course/fetchAuthorCourse',
  async (params: any) => {
    const { data } = await instance.post('/api/user/GetAuthorsCourses', params)

    return data
  }
)

const initialState = {
  courses: {
    items: [],
    status: 'loading',
  },
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFamousCourses.pending, (state, action) => {
      state.courses.status = 'loading'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchFamousCourses.fulfilled, (state, action) => {
      state.courses.status = 'loaded'
      state.courses.items = action.payload
    })
    builder.addCase(fetchFamousCourses.rejected, (state, action) => {
      state.courses.status = 'error'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchCourse.pending, (state, action) => {
      state.courses.status = 'loading'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.courses.status = 'loaded'
      state.courses.items = action.payload
    })
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.courses.status = 'error'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchBoughtCourse.pending, (state, action) => {
      state.courses.status = 'loading'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchBoughtCourse.fulfilled, (state, action) => {
      state.courses.status = 'loaded'
      state.courses.items = action.payload
    })
    builder.addCase(fetchBoughtCourse.rejected, (state, action) => {
      state.courses.status = 'error'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchAuthorCourse.pending, (state, action) => {
      state.courses.status = 'loading'

      // @ts-ignore
      state.courses.items = null
    })
    builder.addCase(fetchAuthorCourse.fulfilled, (state, action) => {
      state.courses.status = 'loaded'
      state.courses.items = action.payload.data
    })
    builder.addCase(fetchAuthorCourse.rejected, (state, action) => {
      state.courses.status = 'error'

      // @ts-ignore
      state.courses.items = null
    })
  },
})

export const courseReducer = coursesSlice.reducer
