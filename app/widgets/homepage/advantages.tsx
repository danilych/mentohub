import { advantages } from '~/data/advantages'
import { Header3 } from '~/shared'

export default function Advantages() {
  return (
    <div className="w-full">
      <div className="mx-auto text-center max-w-[1500px]">
        <div>
          <Header3 className="inline-block">Чому нас</Header3>

          <Header3 className="inline-block text-[#454BE9] pl-2">обирають?</Header3>
        </div>

        <div className='flex flex-row gap-6 mt-6'>
          {advantages.map(advantage => (
            <div key={advantage.image} className='flex flex-col gap-4'>
              <img
                className="h-[291px] rounded-[4px] bg-[#C7FF80]"
                src={advantage.image}
                alt=""
              />

              <p className='text-center text-2xl font-semibold font-manrope leading-[30px] text-[#0F0F10]'>{advantage.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
