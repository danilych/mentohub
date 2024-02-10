import clsx from "clsx"

interface Props {
  className?: string
}

export function Divider({ className }: Props) {
  return (
    <div className="h-0">
      <div className={clsx("h-0.5 bg-[#0F0F10] w-full", className)}></div>
    </div>
  )
}
