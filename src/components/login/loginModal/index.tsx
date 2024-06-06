import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import LoaderTailspin from '@/components/wait/spinner-loader'

function LoginModal() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  // const { isPending } = useAuthenticator((context) => [context.isPending])
  const { route } = useAuthenticator((context) => [context.route])
  const router = useRouter()

  // useEffect to handle redirection after authentication
  useEffect(() => {
    console.log('Auth status:', authStatus)
    console.log('Route:', route)
    if (route === 'authenticated') {
      console.log('Redirecting to dashboard...')
      router.push('/dashboard')
    }
  }, [route])

  return (
    <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
      <Authenticator hideSignUp />
    </div>
  )
}

export default LoginModal
