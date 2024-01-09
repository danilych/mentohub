import clsx from 'clsx'

interface Props {
  className?: string
}

export default function RoundedInput({ className }: Props) {
  return (
    <input
      type="text"
      className={clsx(
        'text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0',
        className
      )}
    />
  )
}
