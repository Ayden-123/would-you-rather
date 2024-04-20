import React from 'react'
import { auth, clerkClient } from '@clerk/nextjs';
import { ReactNode } from "react";
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: "Would You Rather Questions For Kids | Spark your child's creativity.",
    description: "If you're looking for an activity to keep your kids thinking, look no further than our roundup of thought-provoking 'would you rather?' questions for kids",
    icons: "/favicon.ico",
    metadataBase: new URL("https://would-you-rather.com")
  };
}

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

      <div className=' overflow-hidden rounded-lg mt-10 max-w-6xl mx-auto'>
        <h1 className='text-2xl font-bold sm:text-4xl mx-auto md-auto text-center'>
          Would you rather questions for kids
        </h1>
        <div className='grid lg:grid-cols-5'>
          <div className='w-2/3'>
            <Sidebar />
          </div>
          <div className='p-4 sm:p-6 md:col-span-4'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout