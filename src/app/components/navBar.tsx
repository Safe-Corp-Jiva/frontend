import React from 'react';
import Image from 'next/image'; 


const NavBar = () => {

    return (
    <div className = "w-20 bg-white h-screen flex flex-col rounded-r-xl justify-between py-5">
        <div className = "flex flex-col content-center gap-8">
            <div className = "flex items-center justify-center">
                <Image src= "icons/logo.svg" alt = "logo" width={56} height={56}/>
            </div>
            <button className = "flex items-center justify-center">
                <Image src = "icons/House.svg" alt = "home" width={32} height={32}/>
            </button>
            <button className = "flex items-center justify-center">
                <Image src = "icons/Notif.svg" alt = "notifications" width={32} height={32}/>
            </button>
            <button className = "flex items-center justify-center">
                <Image src = "icons/Chat.svg" alt = "chat" width={32} height={32}/>
            </button>
            <button className = "flex items-center justify-center">
                <Image src = "icons/User.svg" alt = "user" width={32} height={32}/>
            </button>
        </div>
        <button className = "flex items-center justify-center">
            <Image src = "/icons/Manual.svg" alt = "user" width={32} height={32}/>
        </button>  
    </div>

    );
};

export default NavBar;