import { Text, FilledButton, RoundedInput } from '~/shared'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchRegister } from '~/redux/slices/auth'
import { ThunkDispatch } from '@reduxjs/toolkit'

export default function RegisterCard() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      NickName: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
    },
    mode: 'onChange',
  })

  const onSubmit = async (values: any) => {
    console.log("data from inputs: ", JSON.stringify(values))
    const data = await dispatch(fetchRegister(values))

    if (data.payload) {
      console.log(true)
    }

    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-0 flex-col w-[621px] h-[728px] bg-white pb-[42px] font-semibold rounded-[20px] shadow-lg absolute m-auto top-0 right-0 bottom-0 left-0 text-black"
    >
      <p className="text-center mb-6 text-[#1F1F1F] font-semibold text-2xl font-manrope mt-[42px]">
        Реєстрація
      </p>

      <div className="mx-[54px] flex flex-col gap-6">
        <div>
          <Text>Повне і’мя</Text>
          <input
            className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
            {...register('NickName', { required: 'Enter your name' })}
          />
        </div>

        <div>
          <Text>Електронна пошта</Text>
          <input
            {...register('Email', { required: 'Enter your name' })}
            className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
          />
        </div>

        <div>
          <Text>Пароль</Text>
          <input
            className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
            {...register('Password', { required: 'Enter your name' })}
          />
        </div>

        <div>
          <Text>Підтвердження паролю</Text>
          <input
            className="mt-2 px-3 text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0"
            {...register('ConfirmPassword', { required: 'Enter your name' })}
          />
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
        <FilledButton type="submit" className="mt-9">
          <p className=" text-white text-2xl">Зареєструвати</p>
        </FilledButton>
      </div>
    </form>
  )
}
