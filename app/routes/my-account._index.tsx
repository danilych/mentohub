import { ThunkDispatch } from '@reduxjs/toolkit'
import { type V2_MetaFunction } from '@remix-run/node'
import { EmptyAvatar } from 'assets/images'
import { Spinner, Textarea } from 'flowbite-react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from '~/redux/slices/auth'
import { fetchUser } from '~/redux/slices/user'
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

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  // @ts-ignore
  const { user } = useSelector(state => state.user)

  console.log(user)

  const [isUserLoading, setIsUserLoading] = useState(true)

  useEffect(() => {
    if (!isAuth) {
      // navigate('/')
    }

    const userId = window.localStorage.getItem('userId')
    let requestData = new FormData()
    requestData.append('id', userId as string)

    dispatch(fetchUser(requestData))
  }, [])

  useEffect(() => {
    if (user.status === 'loaded') setIsUserLoading(false)

    if (user.status === 'loading') setIsUserLoading(true)
  })

  return (
    <div className="bg-white mt-[68px]">
      <AccountMenu page="profile" />

      {isUserLoading ? (
        <div className="w-full h-[570px]">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Default status example"
            size="lg"
          />
        </div>
      ) : (
        <div className="w-[1500px] mt-6 mx-auto">
          <Header3>Налаштування профілю</Header3>

          <Header4 className="mt-4">Аватар</Header4>

          <Text className="mt-2">
            Формати: jpg, png, gif. Максимальний розмір: 1 МБ.{' '}
          </Text>

          <div className="mt-6 mb-9 flex flex-row gap-6">
            <img src={EmptyAvatar} alt="" />

            <div className="w-[310px] my-auto">
              <TransparentButton className="text-[#454BE9]">
                Завантажити фото
              </TransparentButton>
            </div>
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
                <RoundedOutput>{user.data.firstName}</RoundedOutput>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[#1f1f1f] ml-4 text-base font-normal">
                Прізвище
              </p>

              <div className="w-[230px]">
                <RoundedOutput>{user.data.lastName}</RoundedOutput>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[#1f1f1f] ml-4 text-base font-normal">
                Нікнейм
              </p>

              <div className="w-[230px]">
                <RoundedOutput>{user.data.name}</RoundedOutput>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-6 mt-3 mb-9">
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[#1f1f1f] ml-4 text-base font-normal">
              Електронна пошта
              </p>

              <div className="w-[230px]">
                <RoundedOutput>{user.data.email}</RoundedOutput>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[#1f1f1f] ml-4 text-base font-normal">
                Дата народження
              </p>

              <div className="w-[230px]">
                <RoundedOutput>{user.data.dateOfBirth}</RoundedOutput>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[#1f1f1f] ml-4 text-base font-normal">
                Пароль
              </p>

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

          <Textarea className="w-full h-[250px] bg-[#F6F6F6] mt-6">{user.data.aboutMe}</Textarea>
        </div>
      )}
    </div>
  )
}
