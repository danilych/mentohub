import {
  Facebook,
  Instagram,
  LogoMentohub,
  Telegram,
  Youtube,
} from 'assets/icons'
import { useTranslation } from 'react-i18next'
import { Link } from '@remix-run/react'
import useLocalizePathname from '~/i18n/use-localize-pathname'
import Divider from '~/shared/divider'
import { Text } from '~/shared/text'

export let handle = { i18n: 'common' }

export default function Footer() {
  let { t } = useTranslation('common')
  const localizePathname = useLocalizePathname()

  return (
    <div className="flex gap-0 flex-col max-w-[1500px] mb-[42px] mx-auto min-mx-5 min-h-[300px] bg-white font-semibold text-black">
      <div className="flex relative flex-row gap-[218px] pb-[42px]">
        <div className="flex flex-col gap-[13px]">
          <p className="color-[#161616] text-lg leading-[25px] font-semibold not-italic font-manrope">
            {t('footer.navigation')}
          </p>
          <div className="flex flex-col gap-4">
            <Link to={localizePathname('#')}>
              <Text>{t('footer.courses')}</Text>
            </Link>
            <Link to="#">
              <Text>{t('footer.corporate-education')}</Text>
            </Link>
            <Link to="#">
              <Text>{t('footer.become-mentor')}</Text>
            </Link>
            <Link to="#">
              <Text>{t('footer.my-profile')}</Text>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[13px]">
          <p className="color-[#161616] text-lg leading-[25px] font-semibold not-italic font-manrope">
            {t('footer.about-us')}
          </p>
          <div className="flex flex-col gap-4">
            <Link to="#">
              <Text>{t('footer.contacts')}</Text>
            </Link>
            <Link to="#">
              <Text>{t('footer.terms-of-use')}</Text>
            </Link>
            <Link to="#">
              <Text>{t('footer.policy-of-privacy')}</Text>
            </Link>
            <Link to="#">
              <Text>{t('footer.cookie-settings')}</Text>
            </Link>
          </div>
        </div>

        <div className="right-0 absolute text-2xl flex flex-col gap-4">
          <Text>hello@mentohub.com</Text>
          <Text>+ 38 093 962 32 78</Text>
          <Text>+ 38 068 467 38 92</Text>
        </div>
      </div>

      <div className="relative">
        <Divider />
        <div className="mt-6">
          <div className="absolute left-0">
            <Link to={localizePathname('/')}>
              <img
                src={LogoMentohub}
                className="h-[43px] mt-auto"
                alt="Mentohub Logo"
              />
            </Link>

            <p className="text-sm font-normal leading-[19px]">
              Copyright © 2023 Mentohub.
            </p>
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
