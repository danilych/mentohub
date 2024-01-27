import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Link } from '@remix-run/react'

interface Props {
  children?: ReactNode
  className?: string
  to?: any
  type?: 'submit' | 'button'
}

export function MenuButton({ children, className, type, to }: Props) {
  return (
    <Link to={to}>
      <button
        type={type}
        className={clsx(
          'py-[15px] px-[50px] h-[60px] w-[280px] rounded-t-[10px] text-2xl font-medium place-items-center justify-items-center',
          className
        )}
      >
        {children}
      </button>
    </Link>
  )
}
