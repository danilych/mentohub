import type { ThunkDispatch } from '@reduxjs/toolkit'
import { useParams } from '@remix-run/react'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourse } from '~/redux/slices/courses'

export default function Course() {
  const params = useParams()

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { courses } = useSelector(state => state.courses)

  const [isPostsLoading, setIsPostLoading] = useState(true)

  useEffect(() => {
    let formData = new FormData();
    formData.append('CourseID', params.course as string)
    formData.append('UserID', window.localStorage.getItem("userId") as string)
    dispatch(fetchCourse(formData))
  }, [])

  useEffect(() => {
    if (courses.status === 'loaded') setIsPostLoading(false)
  })

  return (
    <div className="max-w-[720px] py-12 my-[56px] mx-auto">
      {isPostsLoading ? (
        <div className="w-full h-screen">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Extra large spinner example"
            size="xl"
          />
        </div>
      ) : (
        <p>Hello world</p>
      )}
    </div>
  )
}
