interface Props { 
    header: string 
    index: number 
    text: string
}

export function ListElement({ header, index, text }: Props) {
  return (
    <div>
      <div className="inline-block">
        <p className="inline-block text-[#454be9] text-lg font-semibold">
          {index}.
        </p>
        <p className="inline-block pl-2 text-lg text-[#1a1a1b] font-medium leading-[30px] font-manrope">
          {header}
        </p>
      </div>

      <p className="mt-4 max-w-[623px]">{text}</p>
    </div>
  )
}
