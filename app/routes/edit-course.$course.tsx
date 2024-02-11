import type { ThunkDispatch } from '@reduxjs/toolkit'
import { useParams } from '@remix-run/react'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourse } from '~/redux/slices/course'
import {
  Header2,
  Header3,
  Header4,
  RoundedInput,
  TransparentButton,
} from '~/shared'

export default function Course() {
  const params = useParams()

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { course } = useSelector(state => state.course)

  const [isPostsLoading, setIsPostLoading] = useState(true)

  useEffect(() => {
    let formData = new FormData()
    formData.append('CourseID', params.course as string)
    console.log(params.course)
    // formData.append('UserID', window.localStorage.getItem("userId") as string)

    dispatch(fetchCourse(formData))
  }, [])

  useEffect(() => {
    if (course.status === 'loaded') setIsPostLoading(false)

    if (course.status === 'loading') setIsPostLoading(true)
  })

  return (
    <div className="w-[1500px] min-h-screen py-12 my-[56px] mx-auto">
      {isPostsLoading ? (
        <div className="w-full h-screen">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Extra large spinner example"
            size="xl"
          />
        </div>
      ) : (
        <div>
          <Header3>{course.data.name}</Header3>

          <img
            className="w-full rounded-[25px] border-2 border-[#454be9] mt-9 h-[534px]"
            src={
              'https://mystudystorage.blob.core.windows.net/test/' +
              course.data.picturePath
            }
            alt=""
          />

          <Header3 className="mt-6">Розділи курсу</Header3>

          <div>
            <Header4 className="ml-4">Додайти інформаційний блок</Header4>

            <div className="mt-2 flex flex-row gap-[26px]">
              <RoundedInput placeholder="Назва розділу" className="w-[656px]" />

              <div className=" w-[310px]">
                <TransparentButton className="text-[#454BE9]">
                  Додати
                </TransparentButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
