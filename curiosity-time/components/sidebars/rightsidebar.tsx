'use client' 
import { cn } from '@/lib/utils';
import React from 'react';


const RightSidebar = () => {
  return (
    <section className={cn('right_sidebar h-[calc(100vh-5px)]')}>
       <h1 className='text-24 text-stone-100'> Right Side Bar</h1>
        </section>
  );
}

export default RightSidebar;
