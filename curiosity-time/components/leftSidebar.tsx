'use client'
import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import logo from '../public/icons/mainlogo.png'
import { navMenuData } from '@/app/constants';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';


const LeftSidebar = () => {
  const pathname = usePathname();
  // const router = useRouter();
  return (
    <div>
      <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
          <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
            <Image src={logo} alt="logo" width={23} height={27} />
            <h1 className="text-24 font-extrabold text-white max-lg:hidden">Curiosity Time</h1>
          </Link>
          {navMenuData.map(({ route, label, icon }) => {
            const isActiveBar = pathname === route || pathname.startsWith(`${route}/`);
            return <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 mx-lg:px-4 justify-start",
              {
                'bg-nav-focus border-r-4 border-orange-1' : isActiveBar 
              }
            )} >
              <Image src={icon} alt={''} width={24} height={24} ></Image>
              {label}
            </Link>
          })}
        </nav>
      </section>
    </div>
  );
}

export default LeftSidebar;

