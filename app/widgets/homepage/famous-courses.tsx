import { useEffect, useState } from 'react'
import { Header3, Tag, Text } from '~/shared'
import Slider from 'react-slick'
import { Spinner } from 'flowbite-react'

import { fetchFamousCourses } from '~/redux/slices/courses'
import type { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { RatingStar } from 'assets/icons'
import { Link } from '@remix-run/react'

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
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Default status example"
            size="lg"
          />
        </div>
      ) : (
        <Slider {...settings}>
          {/* @ts-ignore */}
          {courses.items.map((course: any) => (
            <Link to={`/courses/${course.id}`}>
              <div className="w-[484px] h-[570px] bg-[#F6F6F6] pt-6 rounded-[20px] px-5">
                <img
                  className="h-[250px] w-[444px] mx-auto rounded-[20px]"
                  src={
                    'https://mystudystorage.blob.core.windows.net/test/' +
                    course.picturePath
                  }
                  alt=""
                />

                <div className="mt-4 flex flex-row gap-[18px]">
                  <Tag>розробка</Tag>
                  <Tag>python</Tag>
                  <Tag>sql</Tag>
                </div>

                <p className="mt-4 leading-[26px] text-2xl font-sans font-medium text-[#0F0F10] p-0 m-0 not-italic font-manrope">
                  {course.name}
                </p>

                <Text className="text-[#4e4e51] mt-6">
                  It is test description of the course. It is test description
                  of our course It is I need a lot of text to test the
                  description of the course. It is test description of our
                  course It is I need a lot of text to test the description of
                  the course.
                </Text>

                <div className="bottom-6 absolute flex flex-row gap-[40px]">
                  <p className="font-bold text-[#1a1a1b] text-lg font-manrope color-[#161616] p-0 m-0 leading-[22px] not-italic font-manrope">
                    {course.price + ' UAH'}
                  </p>

                  <div className="flex flex-row">
                    <p className="mr-1 font-bold text-[#1a1a1b] text-lg font-manrope color-[#161616] p-0 m-0 leading-[22px] not-italic font-manrope">
                      {course.rating}
                    </p>

                    <img className="h-5 w-5" src={RatingStar} alt="" />
                    <img className="h-5 w-5" src={RatingStar} alt="" />
                    <img className="h-5 w-5" src={RatingStar} alt="" />
                    <img className="h-5 w-5" src={RatingStar} alt="" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  )
}
