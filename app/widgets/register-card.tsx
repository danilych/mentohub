import { Text } from '~/shared/Typo/text'
import FilledButton from '~/shared/Buttons/filled-button'
import RoundedInput from '~/shared/Inputs/rounded-input'

export let handle = { i18n: 'common' }

export default function RegisterCard() {
  return (
    <div className="flex gap-0 flex-col w-[621px] h-[728px] bg-white pb-[42px] font-semibold rounded-[20px] shadow-lg absolute m-auto top-0 right-0 bottom-0 left-0 text-black">
      <p className="text-center mb-6 text-[#1F1F1F] font-semibold text-2xl font-manrope mt-[42px]">
        Реєстрація
      </p>

      <div className="mx-[54px] flex flex-col gap-6">
        <div>
          <Text>Повне і’мя</Text>
          <RoundedInput className="mt-2" />
        </div>

        <div>
          <Text>Електронна пошта</Text>
          <RoundedInput className="mt-2" />
        </div>

        <div>
          <Text>Пароль</Text>
          <RoundedInput className="mt-2" />
        </div>

        <div>
          <Text>Підтвердження паролю</Text>
          <RoundedInput className="mt-2" />
        </div>

        <div className="flex flex-row gap-6 mr-[15px]">
          <input type="radio" id="html" name="fav_language" value="HTML" />

          <p className="font-normal text-base text-[#1F1F1F] font-manrope">
            Надсилайте мені спеціальні пропозиції, персоналізовані рекомендації
            та поради з навчання.
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <FilledButton className="mt-9">
          <p className="text-white text-2xl">Зареєструвати</p>
        </FilledButton>
      </div>
    </div>
  )
}
