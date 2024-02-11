import clsx from 'clsx'
import { useState } from 'react'
import { Arrow, DeleteIcon, EditIcon } from 'assets/icons'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast'
import { removeBlock } from '~/redux/slices/course'
import { delay } from '~/widgets/helpers/delay'

interface Props {
  header: string
  index: number
  id: string
  className?: string
}

export function HiddenListComponent({ header, index, className, id }: Props) {
  const [isVisibly, setVisibly] = useState(false)

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  function changeVisibly() {
    setVisibly(!isVisibly)
  }

  const onClickRemove = async (id: string) => {
    try {
      let requestData = new FormData();
      requestData.append('blockID', id);

      const data = await dispatch(
        removeBlock(requestData)
      )

      if (data.payload && data.payload.isError == false) {
        console.log(true)

        toast.success('Block was successfully deleted!')

        delay(2000)

        window.location.reload()
      } else {
        toast.error('Something went wrong!')

        return
      }
    } catch (error) {
      toast.error('Something went wrong!')
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
          <p className="inline-block text-[#454be9] text-lg font-semibold">
            {index}.
          </p>
          <p className="inline-block pl-2 text-lg text-[#1a1a1b] font-medium leading-[30px] font-manrope">
            {header}
          </p>
        </div>

        <div className="flex flex-row gap-4 absolute right-2">
          <img src={EditIcon} alt="arrow" />
          <img onClick={() => onClickRemove(id)} src={DeleteIcon} alt="arrow" />
        </div>
      </div>
      <div
        className={clsx(
          ' duration-1400 transition-all ease-in-out',
          isVisibly ? 'max-h-72' : 'max-h-0 overflow-hidden'
        )}
      >
        <p className="font-manrope text-[#1A1A1B] leading-[30px] font-normal mt-8 text-base">
          ergkmeriojgierjgioerjgiouerghjreuhgou
        </p>
      </div>

      <Toaster
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </div>
  )
}
