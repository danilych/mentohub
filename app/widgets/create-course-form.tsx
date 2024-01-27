import { AddImageCover } from 'assets/images'
import { useRef, useState } from 'react'
import {
  FilledButton,
  Header3,
  RoundedInput,
  Text,
  TransparentButton,
} from '~/shared'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useForm } from 'react-hook-form'
import { FileInput } from 'flowbite-react'
import { objectToFormData } from './helpers/object-to-form-data'
import { createCourse } from '~/redux/slices/course'
import toast, { Toaster } from 'react-hot-toast'
import { delay } from './helpers/delay'
import { useNavigate } from '@remix-run/react'

export function CreateCourseForm() {
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  const inputVideoRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()

  let image: string | Blob
  let video: string | Blob

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const [selectedLanguage, setSelectedLanguage] = useState(1)

  const [selectedCategory, setSelectedCategory] = useState('1')

  const handleOptionChange = (event: any) => {
    event.preventDefault()
    setSelectedCategory(event.target.value)
    console.log(selectedCategory)
  }

  const handleImageChange = (event: any) => {
    event.preventDefault()

    image = event.target.files[0]
  }

  const handleVideoChange = (event: any) => {
    event.preventDefault()

    video = event.target.files[0]
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Id: '-1',
      Name: '',
      Price: '',
      CourseSubjectId: selectedCategory,
      LanguageId: selectedLanguage,
      ShortDescription: '',
      Description: '',
      CourseLevelId: '2',
    },
    mode: 'onChange',
  })

  const onSubmit = async (values: any) => {
    console.log(values)
    let formData = objectToFormData(values)

    formData.append('Picture', image)
    formData.append('AuthorId', window.localStorage.getItem('userId') as string)
    formData.append('PreviewVideo', video)

    console.log(formData)

    const data = await dispatch(createCourse(formData))
    console.log('data: ', data)
    if (data.payload) {
      if (data.payload.message === 'Success') {
        toast.success('Success')

        await delay(3000)

        navigate('/')
      } else {
        toast.error(data.payload.message)
      }
    }
  }

  const handleButtonClick = (buttonId: any) => {
    setSelectedLanguage(buttonId)
    console.log(selectedLanguage)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-9 flex-col w-[992px] mx-auto min-mx-5 font-semibold text-black"
    >
      <Header3 className="mt-5">Створення нового курсу</Header3>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Повна назва</Text>
        <input
          {...register('Name', { required: '' })}
          className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-white rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Головна світлина (формати JPG, PNG)</Text>
        <input
          onChange={handleImageChange}
          ref={inputImageRef}
          type="file"
          hidden
        />

        <button type="button" onClick={() => inputImageRef.current?.click()}>
          <img src={AddImageCover} alt="Add image" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Опис (до 1 тис. символів)</Text>
        <textarea
          {...register('Description', { required: '' })}
          className="h-[250px] bg-white rounded-[25px] outline-none text-sm font-manrope font-normal w-full border-0 text-[#4E4E51]"
        />
      </div>

      <div className="flex  w-[230px] flex-col gap-2">
        <Text className="ml-3">Ціна</Text>
        <input
          {...register('Price', { required: '' })}
          className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-white rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Скорочений опис (до 100 символів)</Text>
        <textarea
          {...register('ShortDescription', { required: '' })}
          className="h-[150px] bg-white rounded-[25px] outline-none text-sm font-manrope font-normal w-full border-0 text-[#4E4E51]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text className="ml-3">Відео-вітання (формати MP4, MOV, WEBM)</Text>
        <input
          onChange={handleVideoChange}
          ref={inputVideoRef}
          type="file"
          hidden
        />

        <button type="button" onClick={() => inputVideoRef.current?.click()}>
          <img src={AddImageCover} alt="Add image" />
        </button>
      </div>

      <div className="flex flex-row w-[644px] gap-6">
        <button
          type="button"
          onClick={() => handleButtonClick(1)}
          className={clsx(
            selectedLanguage === 1
              ? 'border-[#454BE9]'
              : 'border-gray-500 text-gray-500',
            'border-2  p-[10px] text-sm font-manrope w-full font-medium rounded-3xl'
          )}
        >
          Українська
        </button>

        <button
          type="button"
          onClick={() => handleButtonClick(2)}
          className={clsx(
            selectedLanguage === 2
              ? 'border-[#454BE9]'
              : 'border-gray-500 text-gray-500',
            'border-2  p-[10px] text-sm font-manrope w-full font-medium rounded-3xl'
          )}
        >
          English
        </button>
      </div>

      <div className="flex flex-col text-manrope font-normal text-base gap-2">
        <Text className="ml-3">Категорія</Text>
        <label>
          <input
            name="radioGroup"
            type="radio"
            value="1"
            className="mr-4"
            checked={selectedCategory === '1'}
            onChange={handleOptionChange}
          />
          Дизайн
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="2"
            className="mr-4"
            checked={selectedCategory === '2'}
            onChange={handleOptionChange}
          />
          Розробка
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="3"
            className="mr-4"
            checked={selectedCategory === '3'}
            onChange={handleOptionChange}
          />
          Бізнес
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="4"
            className="mr-4"
            checked={selectedCategory === '4'}
            onChange={handleOptionChange}
          />
          Фінанси та бухгалтерський облік
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="5"
            className="mr-4"
            checked={selectedCategory === '5'}
            onChange={handleOptionChange}
          />
          ІТ та ПЗ
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="6"
            className="mr-4"
            checked={selectedCategory === '6'}
            onChange={handleOptionChange}
          />
          Офісне програмне забезпечення
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="7"
            className="mr-4"
            checked={selectedCategory === '7'}
            onChange={handleOptionChange}
          />
          Маркетинг
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="8"
            className="mr-4"
            checked={selectedCategory === '8'}
            onChange={handleOptionChange}
          />
          Фотографія та відео
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="9"
            className="mr-4"
            checked={selectedCategory === '9'}
            onChange={handleOptionChange}
          />
          Академічні дисципліни
        </label>
      </div>

      <FilledButton type="submit" className="mx-auto px-[50px] mt-9">
        <p className="text-white w-[216px] text-2xl">Створити</p>
      </FilledButton>

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
    </form>
  )
}
