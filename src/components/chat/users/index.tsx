'use client'

const User = (key: any, agent: any) => {
  console.log(agent)
  return (
    <div className="overflow-auto">
      <div key={key} className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <p className="ml-3">{agent.username}</p>
      </div>
    </div>
  )
}

export default User

