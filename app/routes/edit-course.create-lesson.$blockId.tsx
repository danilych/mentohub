import { type V2_MetaFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/redux/slices/auth'
import { CreateLessonForm } from '~/widgets'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Create Course' }]
}

export default function CreateLesson() {
  const isAuth = useSelector(selectIsAuth)

  const params = useParams()

  useEffect(() => {
    if (!isAuth) {
      // navigate('/')
    }
  }, [])

  return (
    <div className="bg-[#ebffd2] pb-[92px] mt-[68px]">
      <CreateLessonForm id={params.blockId} />
    </div>
  )
}
