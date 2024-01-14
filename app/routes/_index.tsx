import { type V2_MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { heroCover } from 'assets/images'
import { useEffect } from 'react'
import instance from '~/axios'
import { Header2, Text, TransparentButton } from '~/shared'
import {
  Advantages,
  Categories,
  CompaniesTrustUs,
  Hero,
  JoinUs,
  Stats,
} from '~/widgets'
import { FAQ } from '~/widgets/homepage/faq'

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
