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
    <div className='h-screen w-screen flex bg-SCJ-gray'>
      <NavBar/>
      <div className="flex w-11/12 bg-gray-100 rounded-2xl overflow-hidden" style={{height: 'calc(100% - 2rem)' , paddingLeft: '1%', paddingTop: '1%'}}>
      <div className="border rounded-l-xl border-gray-300 w-80 bg-white overflow-y-auto" style={{marginRight: '1%'}}>
          <Users />
        </div>
        <div className="border rounded-l-xl border-gray-300 flex-1 flex flex-col bg-white rounded-r-2xl">
          <TextBox />
          {role === 'admin' ? admin : user}
        </div>
      </div>
    </div>
  );
}