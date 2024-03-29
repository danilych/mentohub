import { UnderlinedInput } from '~/shared/Inputs/underlined-input'
import { TransparentButton } from '~/shared'

export function JoinUsForm() {
  return (
    <div className="bg-white p-[42px] h-[398px] w-[738px]">
      <div className="flex flex-col gap-[42px]">
        <UnderlinedInput placeholder="Ім’я" />
        <UnderlinedInput placeholder="Email" />
        <UnderlinedInput placeholder="Опишіть ваш план" />
        <div className="flex flex-col gap-4">
          <div className="w-[168px]">
            <TransparentButton>Надіслати</TransparentButton>
          </div>
          <div>
            <p className="inline-block ">Продовжуючи ти погоджуєшся з</p>

            <p className="inline-block pl-2 text-[#454BE9]">
              Політикою Конфіденційності
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
