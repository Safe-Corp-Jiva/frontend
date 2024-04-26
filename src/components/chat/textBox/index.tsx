import React from 'react';
import Image from 'next/image';

const TextBox = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* Encabezado del Chat */}
      <div className="p-4 border-b bg-white flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Fer Cantú</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
        <Image src="/icons/User.svg" alt="User" width={32} height={32} />
      </div>

      {/* TextBox*/}
      <div className="mt-auto p-4 border-t border-gray-300 flex justify-between items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button
          className="ml-3 flex justify-center items-center text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Image src="/icons/Send.svg" alt="Send" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default TextBox;
