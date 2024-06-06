'use client'
import { useRouter } from 'next/navigation'
import ProfileCard from '@/components/profile'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Profile() {
  const [username, setUsername] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { signOut } = useAuthenticator((context) => [context.user])

  const router = useRouter()
  const handleSignOut = async (event: any) => {
    event.preventDefault()
    signOut()
    localStorage.clear()
    router.push('/')
  }
  useEffect(() => {
    fetchUserAttributes()
      .then((attributes: any) => {
        console.log(attributes)
        setUsername(attributes.name)
        setEmail(attributes.email)
        setUserId(attributes['custom:profileId'])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  return (
    <div className="flex h-full w-full bg-transparent">
      {username && email && userId && handleSignOut && (
        <ProfileCard username={username} email={email} userId={userId} handleSignOut={handleSignOut} />
      )}
      {isLoading && (
        <div className="flex-grow flex justify-center items-center h-full">
          <div className="bg-white w-[70%] h-[80%] rounded-xl animate-pulse">
            <div className="flex items-center justify-center mt-20">
              <Image src="icons/User_d.svg" alt="user" width={110} height={110} />
            </div>
            <div className="h-8 bg-gray-200 rounded mt-3 mx-auto w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded mt-1 mx-auto w-1/3"></div>
            <div className="gap-6 py-10 w-1/3 mx-auto flex flex-col">
              <div className="flex justify-between">
                <div className="w-1/3 h-4 bg-gray-400 rounded"></div>
                <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6">
              <div className="h-10 bg-gradient-to-r from-blue-900 to-teal-400 w-48 rounded-lg"></div>{' '}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
