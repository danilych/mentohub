import clsx from 'clsx'

interface Props {
  className?: string
  placeholder?: string
}

export function RoundedInput({ className, placeholder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={clsx(
        'text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0',
        className
      )}
    />
  )
}
