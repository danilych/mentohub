import { ThunkDispatch } from '@reduxjs/toolkit'
import { type V2_MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { AddCourseCard } from 'assets/images'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CourseCard } from '~/entities'
import { selectIsAuth } from '~/redux/slices/auth'
import { fetchAuthorCourse } from '~/redux/slices/courses'
import { AccountMenu } from '~/widgets'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | My Account' }]
}

export default function MyCourses() {
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
    requestData.append('authorID', userId as string)

    dispatch(fetchAuthorCourse(requestData))
  }, [])

  useEffect(() => {
    if (courses.status === 'loaded') setIsCoursesLoading(false)

    if (courses.status === 'loading') setIsCoursesLoading(true)
  })

  return (
    <div className="bg-white min-h-screen pb-[92px] mt-[68px]">
      <AccountMenu page="my-courses" />

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
          <Link to="/create-course">
            <img className="h-[570px] w-[484px]" src={AddCourseCard} alt="" />
          </Link>

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
      )}
    </div>
  )
}
