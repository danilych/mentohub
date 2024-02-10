import type { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

export function Header4({ children, className }: Props) {
  return (
    <p
      className={clsx(
        'text-[#0F0F10] text-2xl p-0 m-0 font-semibold leading-[60px] not-italic font-manrope',
        className
      )}
    >
      {children}
    </p>
  )
}
