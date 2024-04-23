import { NavBarDoc } from '@/components/nav'

const CheckUserRole = () => {
  return 'admin'
}

export default function Layout({ admin }: { admin: React.ReactNode }) {
  const role = CheckUserRole()
  return (
    <div className="h-screen w-screen flex bg-SCJ-gray">
      <NavBarDoc />
      {role === 'admin' ? admin : null}
    </div>
  )
}
