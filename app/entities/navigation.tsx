import { Language, LogoMentohub, Search } from 'assets/icons'
import { useTranslation } from 'react-i18next'
export let handle = { i18n: 'home' }

export default function Navigation() {
  let { t } = useTranslation('home')

  return (
    <div className="fixed top-0 left-0 z-[999] flex w-full flex-row py-auto h-[68px] justify-between gap-y-2 bg-white font-semibold text-black">
      <div className="my-auto flex flex-row gap-10 items-center ml-[210px]">
        <img
          src={LogoMentohub}
          className="h-[43px] mt-auto"
          alt="Blog.sol Logo"
        />

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
            className="text-[#4E4E51] outline-none text-sm font-manrope font-normal w-full"
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
        <button className="border-2 border-[#454BE9] p-[10px] text-sm font-manrope font-medium w-[130px] rounded-3xl">
          {t('sign-in')}
        </button>
        <button>
          <img
            src={Language}
            className="h-6 mt-auto"
            alt="Language change button"
          />
        </button>
      </div>
    </div>
  )
}
