import {
  Facebook,
  Instagram,
  LogoMentohub,
  Telegram,
  Youtube,
} from 'assets/icons'
import { Link } from '@remix-run/react'
import { Divider, Text } from '~/shared'
import { footerLinks1, footerLinks2 } from '~/data/footer-links'

export default function Footer() {
  return (
    <div className="flex gap-0 flex-col max-w-[1500px] mb-[42px] mx-auto min-mx-5 min-h-[342px] bg-white font-semibold text-black">
      <div className="flex relative flex-row gap-[218px] py-[42px]">
        <div className="flex flex-col gap-[13px]">
          <p className="color-[#161616] text-lg leading-[25px] font-semibold not-italic font-manrope">
            Навігація
          </p>
          <div className="flex flex-col gap-4">
            {footerLinks1.map(text => (
              <Link key={text.title} to={text.link}>
                <Text>{text.title}</Text>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[13px]">
          <p className="color-[#161616] text-lg leading-[25px] font-semibold not-italic font-manrope">
            Про нас
          </p>
          <div className="flex flex-col gap-4">
            {footerLinks2.map(text => (
              <Link key={text.title} to={text.link}>
                <Text>{text.title}</Text>
              </Link>
            ))}
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
            <Link to="/">
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
