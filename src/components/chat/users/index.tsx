import React from 'react';
import Image from 'next/image';

const users = [
    { name: 'Joaq Badillo', image: 'icons/User.svg'},
    { name: 'Devon Lane', image: '/icons/User.svg'},
    { name: 'Annette Jones', image: '/icons/User.svg'},
    { name: 'Ralph Edward', image: '/icons/User.svg'},
    { name: 'Fer Cantú', image: '/icons/User.svg'},
    { name: 'Alina Rosas', image: '/icons/User.svg'},
    { name: 'Sebas Jones', image: '/icons/User.svg'},
    { name: 'John Pier', image: '/icons/User.svg'},
    { name: 'Don Watts', image: '/icons/User.svg'},
    { name: 'John Such', image: '/icons/User.svg'},
    { name: 'Lord Jones', image: '/icons/User.svg'},
    { name: 'Alexandro Pier', image: '/icons/User.svg'},
    { name: 'Iker Democracy', image: '/icons/User.svg'},
  ];

  const Users = () => {
    return (
      <div className="overflow-auto">
        {users.map((user, index) => (
          <div key={index} className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
            <Image src={user.image} alt={user.name} width={28} height={28} className="rounded-full" />
            <p className="ml-3">{user.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Users;