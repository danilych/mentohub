import { LogoMentohub } from 'assets/icons'
import { Link } from '@remix-run/react'
import { Divider, Text } from '~/shared'
import {
  footerContacts,
  footerLinks1,
  footerLinks2,
  footerSocials,
} from '~/data/footer'

export default function Footer() {
  return (
    <div className="flex gap-0 flex-col max-w-[1500px] mb-[42px] mx-auto mt-[118px] min-mx-5 min-h-[342px] bg-white font-semibold text-black">
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
          {footerContacts.map(contact => (
            <Text key={contact.title}>{contact.title}</Text>
          ))}
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
            {footerSocials.map(social => (
              <img key={social.icon} src={social.icon} alt="Facebook Logo" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
