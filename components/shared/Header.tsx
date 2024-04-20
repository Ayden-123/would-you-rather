"use client"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

export default function Header() {
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl justify-between p-6" aria-label="Global">
                <div className="flex">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img className="h-20 w-auto" src="logo.png" alt="" />
                    </a>
                </div>
                <Popover.Group className="lg:gap-x-12 flex justify-start">
                    <div className=''>
                        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                            Would you rather questions for kids
                        </a>
                    </div>
                    {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Company
                    </a> */}
                </Popover.Group>
            </nav>
        </header>
    )
}
