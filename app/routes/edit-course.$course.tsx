import type { ThunkDispatch } from '@reduxjs/toolkit'
import { useParams } from '@remix-run/react'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourse, updateBlock } from '~/redux/slices/course'
import {
  Header2,
  Header3,
  Header4,
  RoundedInput,
  TransparentButton,
} from '~/shared'

export default function Course() {
  const params = useParams()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Name: '',
      ID: '-1',
      CourseID: params.course as string,
    },
    mode: 'onChange',
  })

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { course } = useSelector(state => state.course)

  const [isPostsLoading, setIsPostLoading] = useState(true)

  console.log(course.data)

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

    if (course.status === 'error') setIsPostLoading(true)
  })

  const onSubmit = async (values: any) => {
    try {
      const data = await dispatch(updateBlock(values))

      if (data.payload && data.payload.isError == false) {
        console.log(true)

        toast.success('Block was successfully created!')
      } else {
        toast.error('Something went wrong!')

        return
      }
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }

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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-2 flex flex-row gap-[26px]"
            >
              <input
              placeholder='Назва розділу'
                className="pl-9 text-[#4E4E51] w-[656px] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal border-0"
                {...register('Name', { required: 'Enter name' })}
              />

              <div className=" w-[310px]">
                <TransparentButton className="text-[#454BE9]">
                  Додати
                </TransparentButton>
              </div>
            </form>
          </div>
        </div>
      )}

      <Toaster
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </div>
  )
}
