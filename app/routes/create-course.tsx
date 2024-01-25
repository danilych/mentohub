import { type V2_MetaFunction } from '@remix-run/node'
import CreateCourseForm from '~/widgets/create-course-form'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Create Course' }]
}

export default function CreateCourse() {
  return (
    <div className="bg-[#ebffd2] mt-[68px] h-screen">
      <CreateCourseForm />
    </div>
  )
}
