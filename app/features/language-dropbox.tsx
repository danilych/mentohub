import { ReactNode } from 'react'
import clsx from 'clsx'
import { Dropdown } from 'flowbite-react'
import { Language } from 'assets/icons'

interface Props {
  className?: string
}

export function LanguageDropbox({ className }: Props) {
  return (
    <Dropdown className={clsx(className)} label={<img src={Language} />} inline>
      <Dropdown.Item href="#">Українська</Dropdown.Item>
      <Dropdown.Item href="#">Англійська</Dropdown.Item>
    </Dropdown>
  )
}
