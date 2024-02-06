import { LogoMentohub, Search } from 'assets/icons'
import { Link } from '@remix-run/react'
import { TransparentInput, TransparentButton } from '~/shared'
import { LanguageDropbox } from '~/features'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/redux/slices/auth'
import { Dropdown } from 'flowbite-react'
import { useEffect } from 'react'

export default function Navigation() {
  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    
  }, [])

  console.log('isAuth: ', isAuth)
  return (
    <div className="fixed top-0 left-0 z-[999] flex w-full border-b-[1px] border-[#BDBDBD] flex-row py-auto h-[68px] justify-between gap-y-2 bg-white font-semibold text-black">
      <div className="my-auto flex flex-row gap-10 items-center ml-[210px]">
        <Link to="/">
          <img
            src={LogoMentohub}
            className="h-[43px] mt-auto"
            alt="Blog.sol Logo"
          />
        </Link>

        <Dropdown
          label={
            <p className="my-auto text-sm font-medium font-manrope">Курси</p>
          }
          inline
        >
          <Dropdown.Item href="#">Українська</Dropdown.Item>
          <Dropdown.Item href="#">Англійська</Dropdown.Item>
        </Dropdown>

        <form className="w-[431px] border-b-[1.5px] flex flex-row gap-3 pb-1 border-[#B5B7F6]">
          <button type="submit">
            <img
              src={Search}
              className="h-[20px] mt-auto"
              alt="Search button"
            />
          </button>

          <TransparentInput placeholder="Що цікавить?" />
        </form>
      </div>
      <div className="my-auto flex flex-row gap-10 items-center ml-10 mr-[210px]">
        <a href="#" className="my-auto text-sm font-medium font-manrope">
          Корпоративна освіта
        </a>
        <a href="#" className="my-auto text-sm font-medium font-manrope">
          Стати ментором
        </a>
        <Link to={isAuth ? '/my-account' : '/login'}>
          <div className="w-[130px]">
            <TransparentButton>
              {isAuth ? 'Мій кабінет' : 'Вхід'}
            </TransparentButton>
          </div>
        </Link>

        <LanguageDropbox />
      </div>
    </div>
  )
}
