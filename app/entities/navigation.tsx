import { Language, LogoMentohub, Search } from 'assets/icons'
import { useTranslation } from 'react-i18next'
import { Link } from '@remix-run/react'
import useLocalizePathname from '~/i18n/use-localize-pathname'
import { Dropdown } from 'flowbite-react'
import useChangePathnameLocale from '~/i18n/use-change-pathname-locale'
import { SupportedLocale } from '~/i18n/supported-locales'

export let handle = { i18n: 'home' }

export default function Navigation() {
  let { t } = useTranslation('home')
  const localizePathname = useLocalizePathname()
  const changePathnameLocale = useChangePathnameLocale()

  return (
    <div className="fixed top-0 left-0 z-[999] flex w-full flex-row py-auto h-[68px] justify-between gap-y-2 bg-white font-semibold text-black">
      <div className="my-auto flex flex-row gap-10 items-center ml-[210px]">
        <Link to={localizePathname('/')}>
          <img
            src={LogoMentohub}
            className="h-[43px] mt-auto"
            alt="Blog.sol Logo"
          />
        </Link>

        <a href="#" className="my-auto text-sm font-medium font-manrope">
          {t('courses')}
        </a>

        <form className="w-[431px] border-b-[1.5px] flex flex-row gap-3 pb-1 border-[#B5B7F6]">
          <button type="submit">
            <img
              src={Search}
              className="h-[20px] mt-auto"
              alt="Search button"
            />
          </button>

          <input
            type="text"
            placeholder="Що цікавить?"
            className="text-[#4E4E51] outline-none text-sm font-manrope font-normal w-full border-0"
          />
        </form>
      </div>
      <div className="my-auto flex flex-row gap-10 items-center ml-10 mr-[210px]">
        <a href="#" className="my-auto text-sm font-medium font-manrope">
          {t('corporate-education')}
        </a>
        <a href="#" className="my-auto text-sm font-medium font-manrope">
          {t('become-mentor')}
        </a>
        <Link to={localizePathname('/sign-in')}>
          <button className="border-2 border-[#454BE9] p-[10px] text-sm font-manrope font-medium w-[130px] rounded-3xl">
            {t('sign-in')}
          </button>
        </Link>

        <Dropdown label={<img src={Language} />} inline>
          <Dropdown.Item href={changePathnameLocale(SupportedLocale.UA)}>{t('languages.ukrainian')}</Dropdown.Item>
          <Dropdown.Item href={changePathnameLocale(SupportedLocale.EN)}>{t('languages.english')}</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}
