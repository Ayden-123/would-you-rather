"use client"

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

const Sidebar = () => {
    return (
        <div className="mt-10 mb-10 ml-5 bg-stone-300">
            <div className='p-2 font-bold'>In This Page</div>
            
            <div className="flex flex-col">
                <ul className="hidden flex-col items-start md:flex">
                    {navLinks.map((link) => {
                        const isActive = usePathname() === link.route
                        return (
                            <li key={link.route}>
                                <Link className={`
                                    flex 
                                    size-full 
                                    p-4
                                    ${isActive? 'font-bold' : ''}
                                    `} href={link.route}>
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
