import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '~/axios'

export const fetchLesson = createAsyncThunk(
  'lesson/fetchLesson',
  async (params: any) => {
    const { data } = await instance.post('/Lesson/GetLessonFromCourseItem', params)

    return data
  }
)

const initialState = {
  lesson: {
    data: null,
    isError: false,
    status: 'loading',
  },
}

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLesson.pending, (state, action) => {
      state.lesson.status = 'loading'

      // @ts-ignore
      state.lesson.data = null
    })
    builder.addCase(fetchLesson.fulfilled, (state, action) => {
      state.lesson.status = 'loaded'
      state.lesson.data = action.payload
    })
    builder.addCase(fetchLesson.rejected, (state, action) => {
      state.lesson.status = 'error'

      // @ts-ignore
      state.lesson.data = null
    })
  },
})

export const lessonItemReducer = lessonSlice.reducer
