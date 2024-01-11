import { categories } from '~/data/categories'
import { Header3 } from '~/shared'

export default function Categories() {
  return (
    <div className="bg-[#B5B7F6] py-9 w-full">
      <div className="mx-auto max-w-[1500px]">
        <div>
          <Header3 className="inline-block text-[#C7FF80]">Категорії</Header3>

          <Header3 className="inline-block pl-2">курсів</Header3>
        </div>

        <div className='flex flex-row gap-6 mt-6'>
          {categories.map(category => (
            <div key={category.image} className='flex flex-col gap-4'>
              <img
                className="h-[293px] w-[281px] rounded-[10px]"
                src={category.image}
                alt=""
              />

              <p className='text-center text-2xl font-medium font-sans leading-[30px] text-white'>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
