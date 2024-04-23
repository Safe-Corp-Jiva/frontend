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
    <div className="h-screen w-screen flex bg-gray-100">
      <NavBar />
      <div className="flex flex-1">
        <div className="w-1/4 bg-white">
          <Users />
        </div>
        <div className="flex-1 flex flex-col">
          {role === 'admin' ? admin : user}
          <TextBox />
        </div>
      </div>
    </div>
  );
}
