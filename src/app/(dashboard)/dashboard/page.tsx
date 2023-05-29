'use client'

import Header from "@/components/Header";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Dashboard = async ({}) => {

    const { data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect('/login')
      }
    })

    return <>
    <Header user_name={session?.user.name} user_img={session?.user.image}/>
        <div className="bg-[#E7ECEE] h-screen">
        <div className='relative isolate pt-14'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                LegalBrain: Your Legal AI Assistant
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                LegalBrain is collection of various AI Tools specifically catered for all Legal Professionals.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Explore
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'>
                  Our mission <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            {/* <div className=" bg-[#E7ECEE]"> */}
            
            {/* </div> */}
        
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-65rem)] right-20'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    <div className="bg-[#E7ECEE] flex items-center justify-center">
      <br />
    <div className='mt-20 flex flex-col items-center justify-center gap-12 w-4/5'>
        
        <Link href = '/dashboard/lawgpt' className='headerlink'>
          <div className='flex-1 items-center justify-center space-x-40 md:flex'>
            <div className='relative h-20 w-20 cursor-pointer p-8'>
              <Image src="/favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
            </div>
            <div className="flex flex-col items center justify-between p-4 gap-4">
              <h2 className="font-bold text-4xl">Law GPT</h2>
              <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor velit explicabo assumenda animi temporibus vitae, iusto voluptatem ipsa quasi repellat sequi ratione necessitatibus non. Temporibus ab nesciunt ullam eius.</p>
            </div>
          </div>
        </Link>
      <Link href = '/dashboard/judgment' className='headerlink'>
        <div className='flex-1 items-center justify-center space-x-40 md:flex'>
          <div className='relative h-20 w-20 cursor-pointer p-8'>
            <Image src="/favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
          </div>
          <div className="flex flex-col items center justify-between p-4 gap-4">
            <h2 className="font-bold text-4xl">Judgment/Cases Finder</h2>
            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor velit explicabo assumenda animi temporibus vitae, iusto voluptatem ipsa quasi repellat sequi ratione necessitatibus non. Temporibus ab nesciunt ullam eius.</p>
          </div>
        </div>
      </Link>
      <Link href = '/dashboard/chatwithdocs' className='headerlink'>
      <div className='flex-1 items-center justify-center space-x-40 md:flex'>
          <div className='relative h-20 w-20 cursor-pointer p-8'>
            <Image src="/favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
          </div>
          <div className="flex flex-col items center justify-between p-4 gap-4">
            <h2 className="font-bold text-4xl">Chat With Docs</h2>
            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor velit explicabo assumenda animi temporibus vitae, iusto voluptatem ipsa quasi repellat sequi ratione necessitatibus non. Temporibus ab nesciunt ullam eius.</p>
          </div>
        </div>
      </Link>
      <Link href = '/dashboard/transliteration' className='headerlink'>
      <div className='flex-1 items-center justify-center space-x-40 md:flex'>
          <div className='relative h-20 w-20 cursor-pointer p-8'>
            <Image src="/favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
          </div>
          <div className="flex flex-col items center justify-between p-4 gap-4">
            <h2 className="font-bold text-4xl">Transliteration</h2>
            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor velit explicabo assumenda animi temporibus vitae, iusto voluptatem ipsa quasi repellat sequi ratione necessitatibus non. Temporibus ab nesciunt ullam eius.</p>
          </div>
        </div>
      </Link>
      </div>
    </div>
        
    </>
    
}

export default Dashboard

