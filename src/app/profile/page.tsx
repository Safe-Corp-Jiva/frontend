"use client";
import NavBar from "../components/navBar";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    const handleSignOut = () => {
        router.push('/login');
    }
    return (
        <div className = "flex bg-gray-200">
            <NavBar/>
            <div className = "flex-grow flex justify-center items-center">
                <div className = "bg-white w-[70%] h-[80%] rounded-xl">
                    <div className="flex items-center justify-center mt-20">
                        <Image src = "icons/User_d.svg" alt = "user" width={110} height={110}/>
                    </div>
                    <p className = "text-center text-2xl text-black font-bold mt-3">John Doe</p>
                    <p className = "text-center text-sm text-black mt-1">Supervisor - SP0001</p>
                    <div className = "grid grid-cols-2 gap-4 py-10 w-1/2 mx-auto">
                            <p className = "text-black font-bold text-sm ml-20 mr-30">Email</p>
                            <p className = "text-gray-500 text-sm">john.doe@jivaa.com</p>
                            <p className = "text-black font-bold text-sm ml-20 mr-30">Date of birth</p>
                            <p className = "text-gray-500 text-sm">01/08/2000</p>
                            <p className = "text-black font-bold text-sm ml-20 mr-30">Department</p>
                            <p className = "text-gray-500 text-sm">Sales</p>
                    </div> 
                    <div className = "flex items-center justify-center mt-8">  
                        <button onClick={handleSignOut} className = "bg-gradient-to-r from-blue-900 to-teal-400 px-3 py-2 h-250 w-60 rounded-md text-white "> Sign Out </button>
                    </div>
                </div>
            </div>
        </div>
    );
};