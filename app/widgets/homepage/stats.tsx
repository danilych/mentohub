import { Link } from '@remix-run/react'
import { heroCover } from 'assets/images'
import { stats } from '~/data/stats'
import { Header2, Text, TransparentButton } from '~/shared'

export default function Stats() {
  return (
    <div className="bg-[#C7FF80] w-full relative">
        <div className='flex flex-row max-w-[1035px] gap-[96px] mx-auto py-9'>
            {stats.map(stat => (
                <div key={stat.title} className='flex flex-col gap-0'>
                    <p className=' text-3xl text-[#454BE9] font-manrope font-bold'>{stat.title}</p>
                    <p className='text-[#1A1A1B] font-medium font-manrope text-lg'>{stat.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
