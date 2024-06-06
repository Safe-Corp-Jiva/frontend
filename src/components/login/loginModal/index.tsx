import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import LoaderFull from '@/components/loading/loading-full'

function LoginModal() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const { route } = useAuthenticator((context) => [context.route]);
  const { isPending } = useAuthenticator((context) => [context.isPending]);
  const router = useRouter()

  // useEffect to handle redirection after authentication
  useEffect(() => {
    if (authStatus === 'authenticated') {
      console.log('Is Pending: ', isPending)  // This will log 'Is Pending: true' when the user is authenticated
      router.push('/dashboard')
    }
  }, [authStatus, router])
  return (
    <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
      <Authenticator hideSignUp />
    </div>
  )
}

export default LoginModal
