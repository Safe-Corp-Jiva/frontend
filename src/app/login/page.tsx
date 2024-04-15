import * as React from 'react';
import Image from 'next/image';
import logoAA from '../logoAA.png'

// Falta agregar colores a config de tailwing para que sean iguales a los de la identidad grafica
// Falta agregar funcionamiento a botones
// El diseño como tal no está igual al del figma
// Falta agregar un checkbox para recordar usuario


export default function Login() {
  return (
    <div className="bg-white grid grid-cols-2 divide-x-2 divide-teal-300 border-2 border-teal-300 flex flex-row justify-center items-center mx-auto mt-20 w-3/4 h-full rounded-md font-sans">
        <div className="w-full h-auto flex justify-center items-center flex-1">
            <Image src={logoAA} alt="logo" width={300} height={300}/>
        </div>
        <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
            <p className="text-indigo-500 font-extrabold text-2xl mt-10">Welcome Back!</p>
            <p className="text-gray-500 p-3">Please login to your account</p>
            <form>
                <input type="text" name="username" className="block border border-gray-400 rounded-lg p-2 m-2" placeholder="Username"/>
                <input type="password" name="password" className="block border border-gray-400 rounded-lg p-2 m-2" placeholder="Password"/>
           </form> 
           <div className="flex flex-row p-3 space-x-4">
                <button className="text-black text-sm">Remember Me</button> 
                <button className="text-teal-700 text-sm">Don't have an account</button> 
           </div>
           <button className="bg-gradient-to-r from-blue-900 to-teal-400 px-3 py-2 h-250 w-60 rounded-md text-white">Login</button>
           <button className="text-gray-500 text-sm p-2 mb-10"> Forgot password? </button>
        </div>
    </div>
  );
}
