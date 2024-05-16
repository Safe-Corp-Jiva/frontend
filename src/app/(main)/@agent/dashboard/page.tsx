import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className="flex items-center justify-center bg-SCJ-gray w-full h-full">
      <div className="bg-white flex flex-col justify-center rounded-xl w-1/3 h-5/6 mx-4">
        <div className="p-3 flex flex-col justify-evenly items-center flex-1">
          <div className="flex flex-col items-center justify-center">
            <Image src="icons/User_d.svg" alt="user" width={110} height={110} />
            <h1 className="mt-4 font-bold text-xl">5533486343</h1>
            <h4 className="font-bold text-sm">5:37</h4>
          </div>
          <div className="flex flex-row p-3 space-x-5">
            <button className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center">
              <img src="icons/telephone.svg" alt="telephone" width={20} height={20} />
            </button>
            <button className="bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center">
              <img src="icons/microphone.svg" alt="microphone" width={20} height={20} />
            </button>
            <button className="bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center">
              <img src="icons/exclamation-triangle.svg" alt="triangle" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center items-center rounded-xl font-sans w-2/3 h-5/6 mx-4">
        <h1 className="font-bold text-xl">Live Transcript</h1>
        <div className="flex flex-col justify-center items-center w-3/4 h-3/4 m-4">
          <h1>Transcript goes here</h1>
        </div>
      </div>
    </div>
  )
}

export default page