import { ThunkDispatch } from '@reduxjs/toolkit'
import { type V2_MetaFunction } from '@remix-run/node'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CourseCard } from '~/entities'
import { selectIsAuth } from '~/redux/slices/auth'
import { fetchBoughtCourse } from '~/redux/slices/courses'
import { AccountMenu } from '~/widgets'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | My Account' }]
}

export default function Courses() {
  const isAuth = useSelector(selectIsAuth)

  const [isCoursesLoading, setIsCoursesLoading] = useState(true)

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { courses } = useSelector(state => state.courses)

  useEffect(() => {
    if (!isAuth) {
      // navigate('/')
    }

    const userId = window.localStorage.getItem('userId')
    let requestData = new FormData()
    requestData.append('userID', userId as string)

    dispatch(fetchBoughtCourse(requestData))
  }, [])

  useEffect(() => {
    if (courses.status === 'loaded') setIsCoursesLoading(false)
    
    if (courses.status === 'loading') setIsCoursesLoading(true)
  })

  return (
    <div className="bg-white min-h-screen pb-[92px] mt-[68px]">
      <AccountMenu page="courses" />

      {isCoursesLoading ? (
        <div className="w-full h-[570px]">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Default status example"
            size="lg"
          />
        </div>
      ) : (
        <div className="mt-[42px] w-[1500px] mx-auto grid grid-cols-3 gap-2">
          {/* @ts-ignore */}
          {courses.items.map((course: any) => (
            <CourseCard key={course.id} id={course.id} picturePath={course.picturePath} name={course.name} price={course.price} rating={course.rating} />
          ))}
          {courses.items.map((course: any) => (
            <CourseCard key={course.id} id={course.id} picturePath={course.picturePath} name={course.name} price={course.price} rating={course.rating} />
          ))}
        </div>
      )}
    </div>
  )
}
