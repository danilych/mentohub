import { ReactNode } from "react"
import clsx from "clsx"

interface Props {
    children?: ReactNode
    className?: string
  }

export default function TransparentButton({ children, className }: Props) {
    return (
      <button className={clsx("border-2 border-[#454BE9] p-[10px] text-sm font-manrope font-medium w-[130px] rounded-3xl", className)}>
        {children}
      </button>
    )
  }
  