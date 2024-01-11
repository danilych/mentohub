import { type V2_MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { heroCover } from 'assets/images'
import { useEffect } from 'react'
import instance from '~/axios'
import { Header2, Text, TransparentButton } from '~/shared'
import Advantages from '~/widgets/homepage/advantages'
import Categories from '~/widgets/homepage/categories'
import CompaniesTrustUs from '~/widgets/homepage/companies-trust-us'
import Hero from '~/widgets/homepage/hero'
import Stats from '~/widgets/homepage/stats'

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
    </div>
  )
}
