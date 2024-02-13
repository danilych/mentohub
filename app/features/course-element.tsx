import clsx from 'clsx'
import { useState } from 'react'
import { DeleteIcon, EditIcon } from 'assets/icons'
import { useDispatch } from 'react-redux'
import type { ThunkDispatch } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { removeBlock } from '~/redux/slices/course'
import { delay } from '~/widgets/helpers/delay'
import { ToasterWithOptions, TransparentButton } from '~/shared'
import { Link } from '@remix-run/react'

interface Props {
  header: string
  index: number
  id: string
  className?: string
  items: any
  lecturesCount: string
}

export function CourseElement({
  header,
  index,
  className,
  id,
  items,
  lecturesCount,
}: Props) {
  const [isVisibly, setVisibly] = useState(false)

  function changeVisibly() {
    setVisibly(!isVisibly)
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
          <div key={index} className="py-3 pl-7 mt-1">
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
