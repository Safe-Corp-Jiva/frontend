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
            <button onClick={handleSignOut} className = "bg-gradient-to-r from-blue-900 to-teal-300 text-white flex items-center justify-center w-16 h-16 m-1"> Sign Out </button>
        </div>
    );
};