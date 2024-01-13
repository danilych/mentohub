import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

export function FilledTag({ children, className }: Props) {
  return (
    <button
      className={clsx(
        'py-3 px-[16px] text-[#454BE9] bg-[#FFFFFF] p-[8px] p-4 place-items-center justify-items-center text-xs font-manrope rounded-[25px]', className
      )}
    >
      {children}
    </button>
  )
}
