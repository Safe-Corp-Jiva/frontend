import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react'

function LoginModal() {
  const { authStatus, email } = useAuthenticator((context) => [context.authStatus])
  const router = useRouter()
  console.log('email', email)

  // useEffect to handle redirection after authentication
  useEffect(() => {
    if (authStatus === 'authenticated') {
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
