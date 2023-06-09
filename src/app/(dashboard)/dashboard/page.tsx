'use client'

import Header from "@/components/Header";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';



const Dashboard = async ({}) => {

    // const { data: session } = useSession({
    //   required: true,
    //   onUnauthenticated() {
    //     redirect('/login')
    //   }
    // })

    
    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
      return redirect('/login')
    }

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
        <div className='py-22 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
            
              <div className='text-effect'> 
                <h1>
                  <span> Law. </span>
                  <span> Gpt. </span>
                  <span> Ai. </span>
                </h1>
            </div>
           
              {/* <h1 className='text-sm font-bold tracking-tight text-gray-900 sm:text-6xl'>
                 {JSON.stringify(session)}
              </h1> */}
              <p className='mt-5 text-xl leading-8 text-gray-600 hover:text-slate-900'>
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
                  Our mission →
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
    <div className='mt-20 mb-36 flex flex-col items-center justify-center gap-12 w-4/5'>
        
        <Link href = '/dashboard/lawgpt' className='headerlink'>
          <div className='flex-1 items-center justify-center space-x-40 md:flex'>
            <div className='relative h-20 w-20 cursor-pointer p-8'>
              <Image src="/favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
            </div>
            <div className="flex flex-col items center justify-between p-4 gap-4">
              <h2 className="font-bold text-4xl">Law GPT</h2>
              <p className="text-lg font-medium">
              Supercharge your legal practice with LawGPT, the AI model that revolutionizes case preparation. Input basic case details and receive valuable suggestions, references, and relevant judgments in minutes. Craft persuasive arguments, save time and resources, and stay updated with the latest legal insights for optimal outcomes. Empower your practice with LawGPT's comprehensive knowledge base and elevate your legal expertise today.
              </p>
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
            <p className="text-lg font-medium">Unlock the hidden gems of legal precedents with LawGPT's advanced Judgment/Case Finder feature. Seamlessly input relevant keywords or case details, and witness the magic unfold as LawGPT swiftly combs through vast legal databases to deliver a curated selection of judgments and cases tailored to your needs. </p>
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
            <p className="text-lg font-medium">Effortlessly collaborate and communicate with our document upload and chat integration. Upload legal documents, engage in real-time discussions, and provide feedback within the intuitive interface. Seamlessly collaborate with clients and colleagues, addressing queries and suggesting edits conveniently. Streamline your workflow and enhance professionalism with our integrated chat functionality.</p>
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
            <p className="text-lg font-medium">Bridge linguistic gaps effortlessly with our robust transliteration feature.Convert legal documents and contracts between different scripts, ensuring accurate and clear representation of legal terms. Our comprehensive language support, including translation capabilities, enables seamless understanding for clients and legal professionals across diverse languages.Unlock the power of comprehensive language support for enhanced global collaboration.</p>
          </div>
          
        </div>
      </Link>
      <Link href = '/dashboard/Drafting' className='headerlink'>
      <div className='flex-1 items-center justify-center space-x-40 md:flex'>
          <div className='relative h-20 w-20 cursor-pointer p-8'>
            <Image src="/favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
          </div>
          <div className="flex flex-col items center justify-between p-4 gap-4">
            <h2 className="font-bold text-4xl">AI-powered Drafting</h2>
            <p className="text-lg font-medium">Our AI model has been trained on over 3500+ drafts, enabling it to provide highly customizable templates and tailored suggestions. Say goodbye to generic language and boilerplate documents as our AI understands your specific needs and requirements, helping you create accurate and customized legal documents efficiently. With our AI-powered drafting, you can save time and ensure your documents meet the highest standards. write this with more improvement.</p>
          </div>
          
        </div>
      </Link>
      </div>
    </div>
        
    </>
    
}

export default Dashboard

