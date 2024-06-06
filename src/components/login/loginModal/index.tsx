import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import LoaderFull from '@/components/loading/loading-full'
import LoaderTailspin from '@/components/wait/spinner-loader'

function LoginModal() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const { isPending } = useAuthenticator((context) => [context.isPending])
  const router = useRouter()

  // useEffect to handle redirection after authentication
  useEffect(() => {
    if (authStatus === 'authenticated' && !isPending) {
      router.push('/dashboard')
    }
  }, [authStatus, isPending, router])

  if (isPending || authStatus === 'configuring') {
    return (
      <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
        <div className='bg-SCJ-dark-primary'>
          <LoaderTailspin />
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
      <Authenticator hideSignUp />
    </div>
  )
}

export default LoginModal
