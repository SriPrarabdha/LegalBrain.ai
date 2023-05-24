import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface pageProps{
    user_img? : string
    user_name?: string
    name?:string
}

const ChatHeader : FC<pageProps> = ({user_img , user_name , name}) =>{
    return <>
    {/* <header className='transparent bg-gray-800 top-0 z-30 flex w-full item-center justify-between p-4 '>
        <div className='flex items-center justify-center md:w-1/5'>
        <Link href="/">
        <div className='relative h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image src="/./favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
        </div>
        </Link>
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
            <Link href = '/dashboard' className='headerlink'>Dashboard</Link>
            <Link href = '/pricing' className='headerlink'>Pricing</Link>
            <Link href = '/aboutus' className='headerlink'>About Us</Link>
        </div>
        <div className='flex gap-4 justify-center items-center md:w-1/5'>
            <div>{user_name}</div>
            <div className='relative h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100 rounded-lg'>
                <Image src={user_img} alt="user" fill= {true} style={{objectFit: "contain"}} />
            </div>
        </div>
        
    </header> */}
    <div className="py-15 text-center shadow-2xl">
    <span className="bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
      {name}
    </span>
  </div>
    </>
}

export default ChatHeader