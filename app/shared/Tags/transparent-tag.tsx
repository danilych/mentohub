import { ReactNode } from "react"
import clsx from "clsx"

interface Props {
    children?: ReactNode
    className?: string
  }

export function TransparentTag({ children, className }: Props) {
    return (
      <button className={clsx("border-2 border-[#454BE9] p-[8px] p-4 font-manrope text-xs rounded-3xl", className)}>
        {children}
      </button>
    )
  }
  