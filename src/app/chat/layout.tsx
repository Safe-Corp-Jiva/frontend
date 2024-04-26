import { NavBar } from '@/components/nav';
import React from 'react';
import { Users } from '@/components/chat';
import { TextBox }  from '@/components/chat';

const CheckUserRole = () => {
  return 'admin';
};

export default function Layout({ user, admin }: { user: React.ReactNode; admin: React.ReactNode }) {
  const role = CheckUserRole();

  return (
    <div className="h-screen w-screen flex bg-white justify-center items-center"> {/* Fondo blanco y centrado */}
      <NavBar />
      <div className="flex w-11/12 bg-gray-100 rounded-2xl shadow-xl overflow-hidden" style={{ height: 'calc(100% - 2rem)' }}>
      <div className="border-r border-gray-300 w-80 bg-white overflow-y-auto">
          <Users />
        </div>
        <div className="border-l border-gray-300 flex-1 flex flex-col bg-white rounded-r-2xl">
          <TextBox />
          {role === 'admin' ? admin : user}
        </div>
      </div>
    </div>
  );
}