import type { ThunkDispatch } from '@reduxjs/toolkit'
import { useParams } from '@remix-run/react'
import { ViewCourseImage } from 'assets/images'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { whatYouWillLearn } from '~/data/view-course'
import { ListElement } from '~/features'
import { CourseElement } from '~/features/course-element'
import { fetchAuthor } from '~/redux/slices/author'
import { fetchCourse } from '~/redux/slices/courses'
import { FilledButton, Header2, Header3, Header4, Text } from '~/shared'

export default function Course() {
  const params = useParams()

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { course } = useSelector(state => state.course)

  const [isPostsLoading, setIsPostLoading] = useState(true)

  useEffect(() => {
    let formData = new FormData()
    formData.append('CourseID', params.course as string)
    dispatch(fetchCourse(formData))

    window.localStorage.getItem('lectureID')
  }, [])

  useEffect(() => {
    if (course.status === 'loading') setIsPostLoading(true)

    if (course.status === 'loaded') setIsPostLoading(false)

    if (course.data != null) {
      let authorFormData = new FormData()
      authorFormData.append('encriptId', course.data.authorEncryptedId as string)

      dispatch(fetchAuthor(authorFormData))
    }
  })

  return (
    <div className="py-12 my-[56px] mx-auto">
      {isPostsLoading ? (
        <div className="w-full h-screen">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Extra large spinner example"
            size="xl"
          />
        </div>
      ) : (
        <div className="w-full">
          <Header2 className="text-center mt-4">{course.data.name}</Header2>

          <img
            className="w-full h-[800px] mt-[50px]"
            src={
              'https://mystudystorage.blob.core.windows.net/test/' +
              course.data.picturePath
            }
            alt=""
          />

          <div className="mt-[92px] pl-[400px]">
            <div className="w-[739px]">
              <Header3>Про курс</Header3>

              <Header4 className="mt-6">Цей курс містить:</Header4>

              <Text className="mt-4 max-w-[738px]">
                {course.data.description}
              </Text>

              <div className="inline-block mt-9">
                <Header4 className="inline-block">Вартість курсу</Header4>

                <Header4 className="inline-block  pl-2 text-[#454be9]">
                  {course.data.price} грн
                </Header4>

                <FilledButton className="ml-[266px] h-[47px] py-[10px] text-white">
                  Придбати
                </FilledButton>
              </div>
            </div>

            <div className="mt-[92px]">
              <Header3>Чому ви навчитесь</Header3>

              <div className="flex flex-row gap-[40px] mt-6">
                <img
                  className="w-[357px] h-[428px]"
                  src={ViewCourseImage}
                  alt=""
                />

                <div className="flex flex-col gap-[56px]">
                  {whatYouWillLearn.map((item, index) => (
                    <ListElement
                      key={index}
                      index={index + 1}
                      header={item.title}
                      text={item.text}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[992px] mt-[92px]">
              <Header3>Програма курсу</Header3>

              <div className="mt-6">
                {/* ts-ignore */}
                {course.data.courseElementsList.map(
                  (element: any, index: number) => (
                    <div key={index} className="w-[992px] mt-4">
                      <CourseElement
                        lecturesCount={element.lessonsCount}
                        items={element.courseItems}
                        id={element.id}
                        header={element.name}
                        index={index + 1}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-[92px] w-[1200px]">
              <Header3>Ваш викладач</Header3>

              <div className="flex flex-row gap-[42px]">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
