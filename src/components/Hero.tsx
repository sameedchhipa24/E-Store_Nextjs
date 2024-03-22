import React from 'react'
import Image from 'next/image'
import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import { Image as IImage } from 'sanity';
import Link from 'next/link';

const getData = async () => {
    const query = "*[_type == 'heroImage'][0]";

    const data = await client.fetch(query);

    return data
}

const Hero = async () => {
    const data = await getData()
    console.log(data);

    return (
        <section className='mx-auto  mt-8 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
            <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
                <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>

                    <h1 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text:6xl  '>Top Fashion for a top price!</h1>
                    <p className='max-w-md leading-relaxed text-gray-500'>
                        We sell only the most exclusive and high quality products for you. We are the best so come and shop with us.
                    </p>
                </div>

                <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                    <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
                        <Image src={urlForImage(data.image2)} alt='Great Photo' className='h-full w-full object-cover object-center hover:transition hover:duration-100' width={500} height={500} />
                    </div>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <Image src={urlForImage(data.image1)} alt="Baby Photo" width={500} height={500} priority className='h-full w-full object-cover object-center' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between gap-x-96 md:flex-row'>
                <div className='flex h-12 w-96 divide-x overflow-hidden rounded-lg border '>
                    <Link href="/Men" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>Men</Link>

                    <Link href="/Women" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>Women</Link>

                    <Link href="/Baby" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>Baby</Link>
                    
                    <Link href="/Toys" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>Toys</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero