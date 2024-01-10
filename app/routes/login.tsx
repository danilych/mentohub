import { type V2_MetaFunction } from '@remix-run/node'
import LoginCard from '~/widgets/login-card'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Mentohub | Login' }]
}

export default function Login() {
  return (
    <div className="bg-[#ebffd2] h-screen mt-[68px]">
      <LoginCard />
    </div>
  )
}
