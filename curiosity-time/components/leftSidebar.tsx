'use-client'
import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import logo from '../public/icons/mainlogo.png'
import { navMenuData } from '@/app/constants';


const LeftSidebar = () => {
  return (
    <div>
      <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
          <Image src={logo} alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">Curiosity Time</h1>
          </Link>
           {navMenuData.map(({route,label,icon})=>{
            return <Link href={route} key={label} className='flex gap-3'>
            <Image src={icon} alt={''} width={20} height={20} ></Image>
            {label}
            </Link>
           })}
        </nav>
      </section>
    </div>
  );
}

export default LeftSidebar;

