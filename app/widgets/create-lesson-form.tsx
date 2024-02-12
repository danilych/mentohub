import { AddVideoCover } from 'assets/images'
import { useRef } from 'react'
import { FilledButton, Header3, Text, ToasterWithOptions } from '~/shared'
import { useDispatch, useSelector } from 'react-redux'
import type { ThunkDispatch } from '@reduxjs/toolkit'
import { useForm } from 'react-hook-form'
import { objectToFormData } from './helpers/object-to-form-data'
import toast from 'react-hot-toast'
import { delay } from './helpers/delay'
import { useNavigate } from '@remix-run/react'
import { createLesson } from '~/redux/slices/course'

interface Props {
  id: string | undefined
}

export function CreateLessonForm({ id }: Props) {
  const inputVideoRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()

  // @ts-ignore
  const { course } = useSelector(state => state.course)

  let video: string | Blob

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const handleVideoChange = (event: any) => {
    event.preventDefault()

    video = event.target.files[0]
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      CourseID: course.data.id!,
      Theme: '',
      Description: '',
      Body: '',
      CourseBlockID: id,
    },
    mode: 'onChange',
  })

  const onSubmit = async (values: any) => {
    console.log(values)
    let formData = objectToFormData(values)

    formData.append('VideoFile', video)

    console.log(formData)

    const data = await dispatch(createLesson(formData))
    console.log('data: ', data)

    if (data.payload.isError == false) {
      toast.success('Lesson was successfully created!')

      await delay(3000)

      navigate(`/edit-course/${course.data.id!}`)
    } else {
      toast.error(data.payload.message)
    }

    console.log(data.payload.isError)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-9 flex-col w-[992px] mx-auto min-mx-5 font-semibold text-black"
    >
      <Header3 className="mt-5">Створення нового уроку</Header3>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Тема</Text>
        <input
          {...register('Theme', { required: '' })}
          className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-white rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Опис (до 100 символів)</Text>
        <textarea
          {...register('Description', { required: '' })}
          className="h-[150px] bg-white rounded-[25px] outline-none text-sm font-manrope font-normal w-full border-0 text-[#4E4E51]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Інформація</Text>
        <textarea
          {...register('Body', { required: '' })}
          className="h-[250px] bg-white rounded-[25px] outline-none text-sm font-manrope font-normal w-full border-0 text-[#4E4E51]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Відео (формати MP4, MOV, WEBM)</Text>
        <input
          onChange={handleVideoChange}
          ref={inputVideoRef}
          type="file"
          hidden
        />

        <button type="button" onClick={() => inputVideoRef.current?.click()}>
          <img src={AddVideoCover} alt="Add image" />
        </button>
      </div>

      <FilledButton type="submit" className="mx-auto px-[50px] mt-9">
        <p className="text-white w-[216px] text-2xl">Створити</p>
      </FilledButton>

      <ToasterWithOptions />
    </form>
  )
}
