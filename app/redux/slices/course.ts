import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '~/axios'

export const createCourse = createAsyncThunk(
  'course/createCourse',
  async (params: any) => {
    const { data } = await instance.post('/Course/Apply', params)

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

export const fetchFullCourse = createAsyncThunk(
  'course/fetchFullCourse',
  async (params: any) => {
    const { data } = await instance.post('/Course/GetCourseInfoList', params)

    return data
  }
)

export const updateBlock = createAsyncThunk(
  'course/updateBlock',
  async (params: any) => {
    const { data } = await instance.post('/CourseBlock/Edit', params)

    return data
  }
)

export const removeBlock = createAsyncThunk(
  'course/removeBlock',
  async (params: any) => {
    const { data } = await instance.post('/CourseBlock/Delete', params)

    return data
  }
)

export const createLesson = createAsyncThunk(
  'course/createLesson',
  async (params: any) => {
    const { data } = await instance.post('/Lesson/Apply', params)

    return data
  }
)

const initialState = {
  course: {
    data: null,
    isError: false,
    status: 'loading',
  },
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCourse.pending, (state, action) => {
      state.course.status = 'loading'

      // @ts-ignore
      state.course.data = null
    })
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.course.status = 'loaded'
      state.course.data = action.payload.data
    })
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.course.status = 'error'

      // @ts-ignore
      state.course.data = null
    })
    builder.addCase(fetchFullCourse.pending, (state, action) => {
      state.course.status = 'loading'

      // @ts-ignore
      state.course.data = null
    })
    builder.addCase(fetchFullCourse.fulfilled, (state, action) => {
      state.course.status = 'loaded'
      state.course.data = action.payload
    })
    builder.addCase(fetchFullCourse.rejected, (state, action) => {
      state.course.status = 'error'

      // @ts-ignore
      state.course.data = null
    })
    builder.addCase(updateBlock.fulfilled, (state, action) => {
      state.course.status = 'loaded'
      state.course.isError = action.payload.isError
    })
    builder.addCase(removeBlock.fulfilled, (state, action) => {
      state.course.status = 'loaded'
      state.course.isError = action.payload.isError
    })
    builder.addCase(createLesson.fulfilled, (state, action) => {
      state.course.status = 'loaded'
      state.course.isError = action.payload.isError
    })
  },
})

export const courseItemReducer = courseSlice.reducer
