import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { detectLocale } from '~/i18n/detect-locale'
import { useChangeLanguage } from 'remix-i18next'
import useChangePathnameLocale from '~/i18n/use-change-pathname-locale'
import i18next from '~/i18n/i18next.server'
import { SupportedLocale } from '~/i18n/supported-locales'

export let handle = { i18n: 'home' }

export const loader: LoaderFunction = async ({ request }) => {
  const locale = detectLocale(request)

  let t = await i18next.getFixedT(request)
  return json({
    locale,
  })
}

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export default function Index() {
  const { locale } = useLoaderData()

  const { t } = useTranslation('common')

  useChangeLanguage(locale)
  const changePathnameLocale = useChangePathnameLocale()


  return (
    <div
      className="bg-[#ebffd2] h-screen mt-[68px]"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <h1 className="color-red text-center">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <a href={changePathnameLocale(SupportedLocale.UA)}>change lng</a>
    </div>
  )
}
