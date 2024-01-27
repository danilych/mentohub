import { Header3, MenuButton } from '~/shared'

interface Props {
  page?: string
}

export function AccountMenu({page}: Props) {
  return (
    <div className="flex gap-9 flex-col w-[1500px] mx-auto min-mx-5 font-semibold text-black">
      <Header3 className="mt-5">Мій кабінет</Header3>

      <div className='flex flex-row gap-2'>
        <MenuButton to={'/my-account/courses'} className={page === 'courses' ? "text-[#1A1A1B] bg-[#C7FF80]" : "bg-[#EFEFEF] text-[#4E4E51]"}>Усі курси</MenuButton>
        <MenuButton to={'/my-account/archived'} className={page === 'archived' ? "text-[#1A1A1B] bg-[#C7FF80]" : "bg-[#EFEFEF] text-[#4E4E51]"}>Архівоване</MenuButton>
        <MenuButton to={'/my-account' } className={page === 'profile' ? "text-[#1A1A1B] bg-[#C7FF80]" : "bg-[#EFEFEF] text-[#4E4E51]"}>Профіль</MenuButton>
        <MenuButton to={'/my-account/my-courses' } className={page === 'my-courses' ? "text-[#1A1A1B] bg-[#C7FF80]" : "bg-[#EFEFEF] text-[#4E4E51]"}>Мої курси</MenuButton>
      </div>
    </div>
  )
}
