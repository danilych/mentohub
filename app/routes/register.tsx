import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import RegisterCard from '~/entities/register-card'

export default function Register() {
  return (
    <div
      className="bg-[#ebffd2] h-screen mt-[68px]"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <RegisterCard />
    </div>
  )
}
