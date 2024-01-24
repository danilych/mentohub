import type { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
  type?: 'submit' | 'button'
}

export function FilledButton({ children, className, type }: Props) {
  return (
    <button
    type={type}
      className={clsx(
        'py-5 px-[50px] bg-[#454BE9] place-items-center justify-items-center rounded-[50px]',
        className
      )}
    >
      {children}
    </button>
  )
}
