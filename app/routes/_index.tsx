import { type V2_MetaFunction } from '@remix-run/node'
import { useEffect } from 'react'
import instance from '~/axios'
import {
  Advantages,
  Categories,
  CompaniesTrustUs,
  FAQ,
  Hero,
  JoinUs,
  Stats,
} from '~/widgets'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Home' }]
}

export default function Index() {
  useEffect(() => {
    console.log(instance)
    instance.get('/Home/GetMostFamoustCourseList')
  }, [])

  return (
    <div className="bg-white h-auto mt-[68px] flex flex-col gap-[120px]">
      <div>
        <Hero />
        <Stats />
      </div>
      <CompaniesTrustUs />
      <Categories />
      <Advantages />
      <JoinUs />
      <FAQ />
    </div>
  )
}
