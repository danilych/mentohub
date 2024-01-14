import { Link } from '@remix-run/react'
import { heroCover } from 'assets/images'
import { Header2, Text, TransparentButton } from '~/shared'

export function Hero() {
  return (
    <div className="h-[600px] bg-[#EBFFD2] pl-[210px] w-full relative">
      <Header2 className="pt-[92px]">Хочеш нову професію?</Header2>

      <div>
        <Header2 className="pt-10 inline-block text-[#454BE9]">
          Онлайн курси
        </Header2>

        <Header2 className="pt-10 inline-block pl-3">для кожного</Header2>
      </div>

      <Text className=" w-[700px] mt-9">
        Ментохаб — це платформа з різноманітними курсами. Допомагаємо з
        працевлаштуванням сотням студентів
      </Text>

      <Link to="/register">
        <div className="w-[244px] mt-[42px] ">
          <TransparentButton>Доєднатися до успіху</TransparentButton>
        </div>
      </Link>

      <img
        className="h-[600px] right-0 bottom-0 absolute"
        src={heroCover}
        alt=""
      />
    </div>
  )
}
