import { useEffect, useState } from 'react'
import instance from '~/axios'
import { companies } from '~/data/companies'
import { Header2, Header3, Text } from '~/shared'
import Slider from 'react-slick'
import { Spinner } from 'flowbite-react'

import { fetchFamousCourses } from '~/redux/slices/courses'
import { AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { useDispatch, useSelector } from 'react-redux'
import { render } from 'react-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function FamousCourses() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { courses } = useSelector(state => state.courses)

  const [isPostsLoading, setIsPostLoading] = useState(true)

  useEffect(() => {
    dispatch(fetchFamousCourses())
  }, [])

  useEffect(() => {
    if (courses.status === 'loaded') setIsPostLoading(false)
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
 
  return (
    <div className="w-full relative">
      <div className="mb-6 mx-auto w-[1500px]">
        <Header3 className="inline-block text-[#0F0F10]">Рекомендовано</Header3>

        <Header3 className="inline-block pl-2 text-[#454BE9]">
          новеньким
        </Header3>
      </div>
      {isPostsLoading ? (
        <div className="w-full h-[570px]">
          <Spinner className='absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]' aria-label="Default status example" size="lg" />
        </div>
      ) : (
        <Slider {...settings}>
          {/* @ts-ignore */}
          {courses.items.map((course: any) => (
            <div>
              <div className="w-[484px] h-[570px] bg-[#F6F6F6] pt-6 rounded-[20px] px-5">
                <img className='h-[250px] w-[444px] mx-auto rounded-[20px]' src={'https://mystudystorage.blob.core.windows.net/test/' + course.picturePath} alt="" />
                <Header3 className='mt-4'>{course.name}</Header3>
                <Text>{course.description}</Text>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  )
}
