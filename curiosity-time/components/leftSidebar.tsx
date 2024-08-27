'use-client'
import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import logo from '../public/icons/mainlogo.png'

const LeftSidebar = () => {
  return (
    <div>
      <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href="/">
            <Image src={logo} alt={''} className='rounded-full w-12 h-12' />
            </Link>
            <p >me hu left</p>
        </nav>
      </section>
    </div>
  );
}

export default LeftSidebar;
