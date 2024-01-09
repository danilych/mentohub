import { ReactNode } from "react"
import clsx from "clsx"

interface Props {
    children?: ReactNode
    className?: string
  }

export function FilledButton({ children, className }: Props) {
    return (
      <button className={clsx("py-5 px-[50px] bg-[#454BE9] place-items-center justify-items-center rounded-[50px]", className)}>
        {children}
      </button>
    )
  }
  