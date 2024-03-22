"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Baby", href: "/Baby" },
    { name: "Toys", href: "/Toys" }
]


export const dynamic = "force-dynamic";

const Navbar = () => {

    const Pathname = usePathname()
    console.log(Pathname);
    
    
    return (
       Pathname != "/profile/login" && Pathname != "/profile/signup" ?  <header className='mb-12 p-3 sticky top-0 z-20  bg-white'>

            <div className='flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>

                <Link href="/">

                    <h1 className='text-4xl font-bold'>
                        E<span className='text-primary'>-Store</span></h1>

                </Link>

                <nav className='hidden gap-12 md:flex 2xl:ml-16'>
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {Pathname === link.href ? (

                                <Link href={link.href} className="text-lg font-semibold text-primary">
                                    {link.name}
                                </Link>) :

                                (<Link href={link.href} className='text-lg font-semibold text-gray-600 hover:text-primary'>
                                    {link.name}
                                </Link>)}

                        </div>))}

                </nav>

                <div className='flex'>

                    <Sheet>
                        <SheetTrigger ><Menu className='md:hidden' /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>


                                    <nav className='2xl:ml-16'>
                                        {links.map((link, idx) => (
                                            <div key={idx} className='mt-5 pt-6 border-b-2 border-b-primary-80'>
                                                {Pathname === link.href ? (

                                                    <Link href={link.href} className="text-lg font-semibold text-primary">
                                                        {link.name}
                                                    </Link>) :

                                                    (<Link href={link.href} className='text-lg font-semibold text-gray-600 hover:text-primary'>
                                                        {link.name}
                                                    </Link>)}

                                            </div>))}

                                    </nav>

                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>:null
    )
}

export default Navbar