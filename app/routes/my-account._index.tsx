import { type V2_MetaFunction } from '@remix-run/node'
import { EmptyAvatar } from 'assets/images'
import { Textarea } from 'flowbite-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/redux/slices/auth'
import {
  Divider,
  Header3,
  Header4,
  RoundedOutput,
  Text,
  TransparentButton,
} from '~/shared'
import { AccountMenu } from '~/widgets'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | My Account' }]
}

export default function MyAccount() {
  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    if (!isAuth) {
      // navigate('/')
    }
  }, [])

  return (
    <div className="bg-white mt-[68px]">
      <AccountMenu page="profile" />

      <div className="w-[1500px] mt-6 mx-auto">
        <Header3>Налаштування профілю</Header3>

        <Header4 className="mt-4">Аватар</Header4>

        <Text className="mt-2">
          Формати: jpg, png, gif. Максимальний розмір: 1 МБ.{' '}
        </Text>

        <div className="mt-6 mb-9 flex flex-row gap-6">
          <img src={EmptyAvatar} alt="" />

          <TransparentButton className="my-auto w-[310px] text-[#454BE9]">
            Завантажити фото
          </TransparentButton>
        </div>

        <Divider className="bg-[#B5B7F6]" />

        <Header4 className="mt-9">Особиста інформація</Header4>

        <Text className="mt-2">
          Ваше облікове ім’я, яке відображається на сайті.
        </Text>

        <div className="flex flex-row gap-6">
          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[#1f1f1f] ml-4 text-base font-normal">Ім’я</p>

            <div className="w-[230px]">
              <RoundedOutput>Марія</RoundedOutput>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[#1f1f1f] ml-4 text-base font-normal">
              Прізвище
            </p>

            <div className="w-[230px]">
              <RoundedOutput>Струц</RoundedOutput>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[#1f1f1f] ml-4 text-base font-normal">Нікнейм</p>

            <div className="w-[230px]">
              <RoundedOutput>Maricka123</RoundedOutput>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-6 mt-3 mb-9">
          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[#1f1f1f] ml-4 text-base font-normal">
              Номер телефону
            </p>

            <div className="w-[230px]">
              <RoundedOutput>+38</RoundedOutput>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[#1f1f1f] ml-4 text-base font-normal">
              Дата народження
            </p>

            <div className="w-[230px]">
              <RoundedOutput>18.01.1999</RoundedOutput>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[#1f1f1f] ml-4 text-base font-normal">Пароль</p>

            <div className="w-[230px]">
              <RoundedOutput> ************</RoundedOutput>
            </div>
          </div>
        </div>

        <Divider className="bg-[#B5B7F6]" />

        <Header4 className="mt-9">Декілька слів про себе </Header4>

        <Text className="mt-2">
          Розкажіть учням про свою освіту, або про досвід роботи у галузі.
        </Text>

        <Textarea className='w-full h-[250px] bg-[#F6F6F6] mt-6'></Textarea>
      </div>
    </div>
  )
}
