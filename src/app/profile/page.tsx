"use client";
import NavBar from "../components/navBar";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const handleSignOut = () => {
        router.push('/login');
    }
    return (
        <div className = "flex bg-gray-200">
            <NavBar/>
            <div className = "flex-grow flex justify-center items-center">
                <div className = "bg-white w-3/4 h-[80%] rounded-xl">
                    <div className="flex items-center justify-center mt-20">
                        <Image src = "icons/User_d.svg" alt = "user" width={110} height={110}/>
                    </div>
                    <p className = "text-center text-2xl text-black font-bold mt-3">John Doe</p>
                    <p className = "text-center text-sm text-black mt-1">Supervisor - SP0001</p>
                    <div className = "grid grid-cols-2 gap-4 mt-6">
                        <div className = "flex justify-center mt-6">
                            <p className = "text-black font-bold text-sm mr-20">Email</p>
                            <p className = "text-gray-500 text-sm">john.doe@jivaa.com</p>
                        </div> 
                        <div className = "flex justify-center mt-6">
                            <p className = "text-black font-bold text-sm mr-20">Date of birth</p>
                            <p className = "text-gray-500 text-sm">01/08/2000</p>
                        </div>
                        <button onClick={handleSignOut} className = "bg-gradient-to-r from-blue-900 to-teal-300 text-white flex items-center justify-center w-16 h-16 m-1"> Sign Out </button>
                    </div> 
                </div>
            </div>
        </div>
    );
};