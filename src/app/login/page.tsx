import * as React from 'react';

export default function Login() {
  return (
    <div className="bg-white grid grid-cols-2 divide-x-2 divide-green-300 border-2 border-green-300 flex flex-row justify-center items-center mx-auto mt-20 w-3/4 h-auto rounded-md font-sans">
        <div className="w-full h-auto p-3 flex justify-center items-center flex-1">
            <div className="bg-green-300 rounded-full w-24 h-24 flex justify-center items-center">
                <h1 className="text-color-white">LOGO</h1>
            </div>
        </div>
        <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
            <p className="text-purple-600 font-extrabold">Welcome Back!</p>
            <form className="p-3">
                <div className="border border-black">
                    <label className="text-gray-500">Username</label>
                    <input type="text" name="username" className="text-black"/>
                </div>
                <div className="border border-black">
                    <label className="text-gray-500">Password</label>
                    <input type="password" name="password" className="text-black"/>
                </div>
           </form> 
            <button className="bg-green-300 px-3 py-2 rounded-md">LOGIN</button>
            <button className="text-gray-500"> Forgot password? </button>
        </div>
    </div>
  );
}
