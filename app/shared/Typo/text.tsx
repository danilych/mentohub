import type { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

export function Text({ children, className }: Props) {
  return (
    <p
      className={clsx(
        'color-[#161616] text-base p-0 m-0 font-medium leading-[22px] not-italic font-manrope',
        className
      )}
    >
      {children}
    </p>
  )
}
