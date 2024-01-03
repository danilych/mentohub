import {
  Facebook,
  Instagram,
  Language,
  LogoMentohub,
  Search,
  Telegram,
  Youtube,
} from 'assets/icons'
import { useTranslation } from 'react-i18next'
import { Link } from '@remix-run/react'
import useLocalizePathname from '~/i18n/use-localize-pathname'
import { Dropdown } from 'flowbite-react'
import useChangePathnameLocale from '~/i18n/use-change-pathname-locale'
import { SupportedLocale } from '~/i18n/supported-locales'
import Divider from '~/shared/divider'
import { Text } from '~/shared/text'

export let handle = { i18n: 'home' }

export default function Footer() {
  let { t } = useTranslation('home')
  const localizePathname = useLocalizePathname()
  const changePathnameLocale = useChangePathnameLocale()

  return (
    <div className="flex gap-0 flex-col max-w-[1500px] mb-[42px] lg:px-[210px] md:px-[100px] px-[50px] min-h-[300px] bg-white font-semibold text-black">
      <div className="flex relative flex-row gap-[218px] pb-[42px]">
        <div className="flex flex-col gap-[13px]">
          <p className="color-[#161616] text-lg leading-[25px] font-semibold not-italic font-manrope">
            Навігація
          </p>
          <div className="flex flex-col gap-4">
            <Text>Курси</Text>
            <Text>Корпоративна освіта</Text>
            <Text>Стати ментором</Text>
            <Text>Мій кабінет</Text>
          </div>
        </div>

        <div className="flex flex-col gap-[13px]">
          <p className="color-[#161616] text-lg leading-[25px] font-semibold not-italic font-manrope">
            Про нас
          </p>
          <div className="flex flex-col gap-4">
            <Text>Контакти</Text>
            <Text>Умови використання</Text>
            <Text>Політика конфіденційності</Text>
            <Text>Налаштування файлів cookie</Text>
          </div>
        </div>

        <div className="right-0 absolute text-2xl flex flex-col gap-4">
          <Text>hello@mentohub.com</Text>
          <Text>+ 38 093 962 32 78</Text>
          <Text>+38 068 467 38 92</Text>
        </div>
      </div>

      <div className="relative">
        
        <Divider />
        <div className="mt-6">
          <div className='absolute left-0'>
            <Link to={localizePathname('/')}>
              <img
                src={LogoMentohub}
                className="h-[43px] mt-auto"
                alt="Mentohub Logo"
              />
            </Link>

            <p className='text-sm font-normal leading-[19px]'>Copyright © 2023 Mentohub.</p>
          </div>

          <div className="flex absolute right-0 flex-row gap-6">
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Instagram} alt="Instagram Logo" />
            <img src={Telegram} alt="Telegram Logo" />
            <img src={Youtube} alt="Youtube Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
