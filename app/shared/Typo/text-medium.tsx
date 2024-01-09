import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export function TextMedium({ children}: Props) {
  return <p className="color-[#161616] text-base p-0 m-0 leading-[22px] not-italic font-medium font-manrope">{children}</p>
}
