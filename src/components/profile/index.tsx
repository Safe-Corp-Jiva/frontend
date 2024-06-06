import Image from 'next/image'

const ProfileCard = ({
  username,
  userId,
  email,
  handleSignOut,
}: {
  username: string
  userId: string
  email: string
  handleSignOut: (event: any) => Promise<void>
}) => {
  return (
    <div className="flex-grow flex justify-center items-center h-full">
      <div className="flex flex-col bg-white shadow-md justify-evenly w-[70%] h-[80%] rounded-xl">
        <div className="flex flex-col items-center justify-center ">
          <Image src="icons/User_d.svg" alt="user" width={110} height={110} />
          <p className="text-center text-2xl text-black font-bold mt-3">{username}</p>
        </div>
        <div className="gap-6 py-10 w-1/3 mx-auto flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-black text-md font-bold text-sm">ID</h2>
            <p className="text-center text-sm text-gray-500 ">{userId}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="text-black text-md font-bold text-sm">Email</h2>
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
        <div className="flex items-center justify-center">
          <button
            onClick={handleSignOut}
            className="bg-gradient-to-r from-blue-900 hover:bg-gradient-to-r hover:from-SCJ-dark-primary hover:to-SCJ-primary to-teal-400 px-3 py-2 h-12 w-48 rounded-lg text-white "
          >
            {' '}
            Sign Out{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
