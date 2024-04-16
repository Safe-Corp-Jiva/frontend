"use client";
import React from 'react';
import Image from 'next/image'; 
import logo from '../logo.svg'
import {useRouter} from 'next/navigation';

const NavBar = () => {
    const router = useRouter();

    const handleProfile = () => {
        router.push('/profile');
    }

    return (
    <div className = "flex-none w-20 bg-white h-screen flex flex-col items-center rounded-r-xl">
        <div className = "mt-5">
            <Image src={logo} alt="logo" width={50} height={50}/>
        </div>
        <div className = "flex flex-col">
            <button className = "flex items-center justify-center w-16 h-16 m-1">
                <img src = "/icons/House.svg" alt = "home" className = "w-8 h-8"/>
            </button>
            <button className = "flex items-center justify-center w-16 h-16 m-1">
                <img src = "/icons/Notif.svg" alt = "notifications" className = "w-8 h-8"/>
            </button>
            <button className = "flex items-center justify-center w-16 h-16 m-1">
                <img src = "/icons/Chat.svg" alt = "chat" className = "w-8 h-8"/>
            </button>
            <button onClick={handleProfile} className = "flex items-center justify-center w-16 h-16 m-1">
                <img src = "/icons/User.svg" alt = "user" className = "w-8 h-8"/>
            </button>
        </div>
        <div className="absolute bottom-0">
            <button className = "flex items-center justify-center w-16 h-16 m-1">
                <img src = "/icons/Manual.svg" alt = "user" className = "w-8 h-8"/>
            </button>
        </div>
    </div>

    );
};

export default NavBar;