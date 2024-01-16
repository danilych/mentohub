import clsx from 'clsx'
import { useState } from 'react'
import { Arrow } from 'assets/icons'

export function FaqQuestion({ ...props }) {
  const [isVisibly, setVisibly] = useState(false)

  function changeVisibly() {
    setVisibly(!isVisibly)
  }

  return (
    <div
      className={clsx(
        'text-[#0F0F10] cursor-pointer relative  w-full pb-8',
        isVisibly ? 'border-b-2 border-[#454BE9]' : 'border-b-2 border-[#B5B7F6]-2'
      )}
      onClick={changeVisibly}
      role="presentation"
    >
      <div className="flex items-center justify-start">
        <p className="inline-block text-2xl leading-[30px] font-manrope font-semibold">
          {props.question}
        </p>

        <div
          className={clsx(
            'inline-block h-2 origin-center absolute right-0 pb-6 transition-all duration-500 ease-in-out',
            isVisibly ? 'rotate-180' : ''
          )}
        >
          <Arrow />
        </div>
      </div>
      <div
        className={clsx(
          ' duration-1400 transition-all ease-in-out',
          isVisibly ? 'max-h-72' : 'max-h-0 overflow-hidden'
        )}
      >
        <p className="font-manrope text-[#1A1A1B] leading-[30px] font-normal mt-8 text-base">
          {props.answer}
        </p>
      </div>
    </div>
  )
}
