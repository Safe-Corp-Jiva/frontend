'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { useEffect, useState } from 'react'

export default function Profile() {
  const [username, setUsername] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const { signOut } = useAuthenticator((context) => [context.user]);
  const router = useRouter()
  const handleSignOut = async (event: any) => {
    event.preventDefault()
    await signOut()
    localStorage.clear()
    router.push('/')
  }
  useEffect(() => {
    fetchUserAttributes().then((attributes: any) => {
      console.log(attributes)
      setUsername(attributes.name)
      setEmail(attributes.email)
      setUserId(attributes["custom:profileId"])
    })
  }, [])
  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="flex-grow flex justify-center items-center h-full">
        <div className="bg-white w-[70%] h-[80%] rounded-xl">
          <div className="flex items-center justify-center mt-20">
            <Image src="icons/User_d.svg" alt="user" width={110} height={110} />
          </div>
          <p className="text-center text-2xl text-black font-bold mt-3">{username}</p>
          <p className="text-center text-sm text-black mt-1">{userId}</p>
          <div className="gap-6 py-10 w-1/3 mx-auto flex flex-col">
            <div className="flex justify-between">
              <p className="text-black font-bold text-sm">Email</p>
              <p className="text-gray-500 text-sm">{email}</p>
            </div>
            {/* <div className="flex justify-between">
              <p className="text-black font-bold text-sm">Date of birth</p>
              <p className="text-gray-500 text-sm">01/08/2000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-black font-bold text-sm">Department</p>
              <p className="text-gray-500 text-sm">Sales</p>
            </div> */}
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-blue-900 to-teal-400 px-3 py-2 h-250 w-48 rounded-lg text-white "
            >
              {' '}
              Sign Out{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
