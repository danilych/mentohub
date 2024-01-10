import { ReactNode } from "react"
import clsx from "clsx"

interface Props {
    children?: ReactNode
    className?: string
    href?: string
  }

export function TransparentButton({ children, className }: Props) {
    return (
      <button className={clsx("border-2 border-[#454BE9] p-[10px] text-sm font-manrope w-full font-medium rounded-3xl", className)}>
        {children}
      </button>
    )
  }
  