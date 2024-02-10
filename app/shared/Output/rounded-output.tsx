import clsx from 'clsx'
import type { HTMLProps, ReactNode } from 'react'

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string
  children?: ReactNode
}

export function RoundedOutput({ className, children }: Props) {
  return (
    <div
      className={clsx(
        'text-[#4E4E51] py-[11px] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0',
        className
      )}
    >
      <p className="ml-[18px] text-[#1f1f1f] text-base font-normal">{children}</p>
    </div>
  )
}
