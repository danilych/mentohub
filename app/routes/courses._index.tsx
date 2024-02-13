import type { ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCourses } from '~/redux/slices/courses'
import { Header3 } from '~/shared'
import { Spinner } from 'flowbite-react'
import { CourseCard } from '~/entities'

export default function Courses() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const [categoryValue, setCategoryValue] = useState('Loading')

  // @ts-ignore
  const { courses } = useSelector(state => state.courses)

  const [isCoursesLoading, setIsCoursesLoading] = useState(true)

  useEffect(() => {
    const value = window.localStorage.getItem('categoryValue')
    const key = window.localStorage.getItem('CategoryID')

    setCategoryValue(value!)

    const requestValue = {
      CategoryID: key,
      SearchText: '',
      LanguageID: '-1',
      Rate: '-1',
      Level: '-1',
      PriceFrom: '0',
      PriceTo: '500',
      CurrentPage: '0',
    }

    console.log(courses.items)

    dispatch(searchCourses(requestValue))
  }, [])

  useEffect(() => {
    if (courses.status === 'loaded') setIsCoursesLoading(false)

    if (courses.status === 'loading') setIsCoursesLoading(true)
  })

  return (
    <div className="py-12 my-[56px] max-w-[1500px] mx-auto">
      {isCoursesLoading ? (
        <div className="w-full h-[570px]">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Default status example"
            size="lg"
          />
        </div>
      ) : (
        <div className="w-full">
          <Header3>Pезультати за запитом “{categoryValue}”</Header3>

          <div className="grid grid-cols-3 mt-4 gap-2 w-[1500px]">
            {/* @ts-ignore */}
            {courses.items.map((course: any) => (
              <CourseCard
                key={course.id}
                id={course.id}
                picturePath={course.picturePath}
                name={course.name}
                price={course.price}
                rating={course.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
