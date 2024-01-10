import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

export function Header2({ children, className }: Props) {
  return (
    <p
      className={clsx(
        'color-[#0F0F10] text-6xl p-0 m-0 font-medium leading-[22px] not-italic font-jakarta',
        className
      )}
    >
      {children}
    </p>
  )
}
