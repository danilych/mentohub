import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import LoginCard from '~/widgets/login-card'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Login' }]
}

export default function Login() {
  return (
    <div
      className="bg-[#ebffd2] h-screen mt-[68px]"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <LoginCard />
    </div>
  )
}
