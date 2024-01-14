import clsx from 'clsx'

interface Props {
  className?: string
  placeholder?: string
}

export function UnderlinedInput({ className, placeholder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={clsx("text-[#4E4E51] focus:outline-none border-b-[1px] focus:border-none text-sm font-manrope font-normal w-full border-0", className)}
    />
  )
}
