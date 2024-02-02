import { type V2_MetaFunction } from '@remix-run/node'
import {
  Advantages,
  Categories,
  CompaniesTrustUs,
  FAQ,
  Hero,
  JoinUs,
  Stats,
} from '~/widgets'
import { FamousCourses } from '~/widgets/homepage/famous-courses'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Home' }]
}

export default function Index() {
  return (
    <div className="bg-white h-auto mt-[68px] flex flex-col gap-[120px]">
      <div>
        <Hero />
        <Stats />
      </div>
      <FamousCourses />
      <CompaniesTrustUs />
      <Categories />
      <Advantages />
      <JoinUs />
      <FAQ />
    </div>
  )
}
