import clsx from 'clsx'
import React, { HTMLAttributes, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  // className?: string
}

export function Text({ children}: Props) {
  return <p className="color-[#161616] text-base p-0 m-0 font-medium leading-[22px] not-italic font-manrope">{children}</p>
}
