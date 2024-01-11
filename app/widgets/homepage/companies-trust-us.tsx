import { companies } from '~/data/companies'
import { Header3 } from '~/shared'

export default function CompaniesTrustUs() {
  return (
    <div className="w-full relative">
      <div className='mx-auto text-center'>
        <Header3 className="inline-block text-[#0F0F10]">
          Нам довіряють понад
        </Header3>

        <Header3 className="inline-block pl-2 text-[#454BE9]">
          600
        </Header3>

        <Header3 className="inline-block pl-2 text-[#0F0F10]">
          компаній та
        </Header3>

        <Header3 className="inline-block pl-2 text-[#454BE9]">
          тисячі
        </Header3>

        <Header3 className="inline-block pl-2 text-[#0F0F10]">
          студентів
        </Header3>
      </div>

      <div className='flex flex-row gap-[42px] w-[1097px] mt-6 mx-auto'>
        {companies.map(company => (
          <img className='h-[64px]' key={company.icon} src={company.icon} alt="" />
        ))}
      </div>
    </div>
  )
}
