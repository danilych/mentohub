import { useEffect, useState } from 'react'
import { Header3} from '~/shared'
import Slider from 'react-slick'
import { Spinner } from 'flowbite-react'

import { fetchFamousCourses } from '~/redux/slices/courses'
import type { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CourseCard } from '~/entities'

export function FamousCourses() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { courses } = useSelector(state => state.courses)

  const [isCoursesLoading, setIsCoursesLoading] = useState(true)

  useEffect(() => {
    dispatch(fetchFamousCourses())
  }, [])

  useEffect(() => {
    if (courses.status === 'loaded') setIsCoursesLoading(false)

    if (courses.status === 'loading') setIsCoursesLoading(true)
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

      {isCoursesLoading ? (
        <div className="w-full h-[570px]">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Default status example"
            size="lg"
          />
        </div>
      ) : (
        <Slider className='w-[1500px] mx-auto' {...settings}>
          {/* @ts-ignore */}
          {courses.items.map((course: any) => (
            <CourseCard key={course.id} id={course.id} picturePath={course.picturePath} name={course.name} price={course.price} rating={course.rating} />
          ))}
        </Slider>
      )}
    </div>
  )
}
