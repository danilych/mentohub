import clsx from 'clsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { ThunkDispatch } from '@reduxjs/toolkit'
import { ToasterWithOptions } from '~/shared'
import { useNavigate } from '@remix-run/react'
import { fetchLesson } from '~/redux/slices/lesson'

interface Props {
  header: string
  index: number
  id: string
  className?: string
  items: any
  lecturesCount: string
  isUpdateId?: boolean
}

export function CourseElement({
  header,
  index,
  className,
  id,
  items,
  lecturesCount,
  isUpdateId
}: Props) {
  const [isVisibly, setVisibly] = useState(false)

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const navigate = useNavigate()

  function changeVisibly() {
    setVisibly(!isVisibly)
  }

  function setVideoPath(id_: string) {
    console.log("bebra")
    window.localStorage.setItem('lectureId', id_)

    if(isUpdateId) {
        let requestData = new FormData()    
        requestData.append('courseItemId', id_)
        dispatch(fetchLesson(requestData))

        navigate(`/learn/lesson/${id_}`)
    }
  }

  return (
    <div
      className={clsx(
        'text-[#0F0F10] cursor-pointer relative w-full pb-3',
        isVisibly
          ? 'border-b-2 border-[#454BE9]'
          : 'border-b-2 border-[#B5B7F6]-2',
        className
      )}
      onClick={changeVisibly}
      role="presentation"
    >
      <div className="flex items-center justify-start">
        <div className="inline-block">
          <p className="inline-block text-2xl font-semibold">{index}.</p>
          <p className="inline-block pl-2 text-2xl text-[#1a1a1b] font-semibold leading-[30px] font-manrope">
            {header}
          </p>
        </div>
        <div className="flex text-[#454be9] flex-row gap-4 absolute right-2">
          <p className="text-manrope font-normal text-base">
            {lecturesCount} лекцій
          </p>
        </div>
      </div>
      <div
        className={clsx(
          ' duration-1400 transition-all ease-in-out flex flex-col gap-2',
          isVisibly ? '' : 'max-h-0 overflow-hidden'
        )}
      >
        {items.map((item: any, index: number) => (
          <div onClick={() => setVideoPath(item.courseItemId)} key={index} className="py-3 pl-7 mt-1">
            <p className="text-manrope font-normal text-base text-[#1a1a1b]">
              {item.elementName}
            </p>
          </div>
        ))}
      </div>

      <ToasterWithOptions />
    </div>
  )
}
