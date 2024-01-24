import { FilledButton, Header3, RoundedInput, Text } from '~/shared'

export default function CreateCourseForm() {
  return (
    <div className="flex gap-9 flex-col w-[992px] mb-[42px] mx-auto min-mx-5 min-h-[342px] font-semibold text-black">
        <Header3 className='mt-5'>Створення нового курсу</Header3>

        <div className='flex flex-col gap-2'>
            <Text className='ml-3'>Повна назва</Text>
            <RoundedInput className='bg-white' />
        </div>

        <div className='flex flex-col gap-2'>
            <Text className='ml-3'>Головна світлина (формати JPG, PNG)</Text>
            <RoundedInput className='bg-white' />
        </div>

        <div className='flex flex-col gap-2'>
            <Text className='ml-3'>Опис (до 1 тис. символів)</Text>
            <textarea className='h-[250px] bg-white rounded-[25px] outline-none text-sm font-manrope font-normal w-full border-0 text-[#4E4E51]' />
        </div>

        <div className='flex flex-col gap-2'>
            <Text className='ml-3'>Ціна</Text>
            <RoundedInput className='bg-white w-[230px]' />
        </div>

        <FilledButton className="mx-auto px-[50px] mt-9">
          <p className="text-white w-[216px] text-2xl">Створити</p>
        </FilledButton>
    </div>
  )
}
