import { type V2_MetaFunction } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/redux/slices/auth'
import CreateCourseForm from '~/widgets/create-course-form'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Create Course' }]
}

export default function CreateCourse() {
  const navigate = useNavigate()

  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    if (!isAuth) {
      // navigate('/')
    }
  }, [])

  return (
    <div className="bg-[#ebffd2] pb-[92px] mt-[68px]">
      <CreateCourseForm />
    </div>
  )
}
