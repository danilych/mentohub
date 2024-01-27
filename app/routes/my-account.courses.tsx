import { type V2_MetaFunction } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/redux/slices/auth'
import { AccountMenu } from '~/widgets'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | My Account' }]
}

export default function Courses() {
  const navigate = useNavigate()

  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    if (!isAuth) {
      // navigate('/')
    }
  }, [])

  return (
    <div className="bg-white pb-[92px] mt-[68px]">
      <AccountMenu page="courses" />
    </div>
  )
}