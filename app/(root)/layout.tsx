import React from 'react'
import { auth, clerkClient } from '@clerk/nextjs';
import { ReactNode } from "react";
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';


const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) => {

  return (
    <div className='bg-stone-100'>
      <Header />
      <div className="mx-auto w-full border border-gray-300"></div>

      <div className=' overflow-hidden rounded-lg mt-10 max-w-5xl mx-auto'>
        <h1 className='text-2xl font-bold sm:text-4xl mx-auto md-auto text-center'>
          Would you rather questions for kids
        </h1>
        <div className='grid lg:grid-cols-4'>
          <div className='w-2/3'>
            <Sidebar />
          </div>
          <div className='p-4 sm:p-6 md:col-span-3'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout