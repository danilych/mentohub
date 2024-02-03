import type { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string

}

export function Tag({ children, className }: Props) {
  return (
    <div className={clsx("rounded-[20px] inline-block bg-[#fff] py-[6px] px-7", className)}>
        <p className='text-[#454be9] text-base font-medium'>{children}</p>
    </div>
  )
}
