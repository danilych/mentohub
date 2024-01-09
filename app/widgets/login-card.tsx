import { Text } from '~/shared/Typo/text'
import FilledButton from '~/shared/Buttons/filled-button'
import RoundedInput from '~/shared/Inputs/rounded-input'

export default function LoginCard() {
  return (
    <div className="flex gap-0 flex-col w-[621px] h-[440px] bg-white font-semibold rounded-[20px] shadow-lg absolute m-auto top-0 right-0 bottom-0 left-0 text-black">
      <p className="text-center mb-6 text-[#1F1F1F] font-semibold text-2xl font-manrope mt-[42px]">
        Логін
      </p>

      <div className="mx-[54px] flex flex-col gap-6">
        <div>
          <Text>Електронна пошта</Text>
          <RoundedInput className="mt-2" />
        </div>

        <div>
          <Text>Пароль</Text>
          <RoundedInput className="mt-2" />
        </div>
      </div>

      <div className="mx-auto">
        <FilledButton className="mt-9">
          <p className="text-white text-2xl">Увійти</p>
        </FilledButton>
      </div>
    </div>
  )
}
