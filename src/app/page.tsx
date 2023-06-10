import Header from '@/components/Header'
import Landing from '@/components/Landing'

import Features from '@/components/Features'

import Image from 'next/image'
import { db } from '@/lib/db'
import Pricing from "@/components/Pricing";
import Footer from '@/components/Footer';

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";


export default async function Home() {

  await db.set('hello' , 'hello')
  return (
    <div>
      <Header />
      <main className='bg-[#E7ECEE]'>
        <Landing />    
        </main>
        <Features/>
 {/* about us  */}
        <AboutSectionOne />
        <AboutSectionTwo />
        <Pricing/>
        {/* <Contact/> */}

        
        <Footer/>
    
    </div>
  )
}
