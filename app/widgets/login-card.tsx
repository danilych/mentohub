import type { ThunkDispatch } from '@reduxjs/toolkit'
import { Link, useNavigate } from '@remix-run/react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { fetchAuth } from '~/redux/slices/auth'
import { Text, FilledButton } from '~/shared'
import { delay } from './helpers/delay'

export default function LoginCard() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Email: '',
      Password: '',
    },
    mode: 'onChange',
  })

  const onSubmit = async (values: any) => {
    try {
      const data = await dispatch(fetchAuth(values))

      if (data.payload) {
        console.log(true)

        toast.success('You are successfully login!')

        await delay(3000)

        navigate('/')
      } else {
        toast.error('Something went wrong!')

        return
      }

      console.log(data.payload)

      window.localStorage.setItem('userId', data.payload.userID)
      window.localStorage.setItem('email', values.Email)
      window.localStorage.setItem('password', values.Password)
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-0 flex-col w-[621px] h-[500px] bg-white font-semibold rounded-[20px] shadow-lg absolute m-auto top-0 right-0 bottom-0 left-0 text-black"
    >
      <p className="text-center mb-6 text-[#1F1F1F] font-semibold text-2xl font-manrope mt-[42px]">
        Логін
      </p>

      <div className="mx-[54px] flex flex-col gap-6">
        <div>
          <Text>Електронна пошта</Text>
          <input
            type="email"
            autoComplete="email"
            className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
            {...register('Email', { required: 'Enter your name' })}
          />
        </div>

        <div>
          <Text>Пароль</Text>
          <input
            type="password"
            autoComplete="password"
            className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
            {...register('Password', { required: 'Enter your name' })}
          />

          <Link to="/register">
            <Text className="text-[#454BE9] mt-2">
              Ще не зареєстровані? Зробіть це прямо зараз!
            </Text>
          </Link>
        </div>
      </div>

      <div className="mx-auto">
        <FilledButton className="mt-9">
          <p className="text-white text-2xl">Увійти</p>
        </FilledButton>
      </div>

      <Toaster
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </form>
  )
}
