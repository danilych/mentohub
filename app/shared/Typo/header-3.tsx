import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

export function Header3({ children, className }: Props) {
  return (
    <p
      className={clsx(
        'color-[#0F0F10] text-3xl p-0 m-0 font-bold leading-[60px] not-italic font-manrope',
        className
      )}
    >
      {children}
    </p>
  )
}
