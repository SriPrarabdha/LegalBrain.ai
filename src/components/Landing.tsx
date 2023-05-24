'use client';

import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, GradientTexture } from "@react-three/drei";
import React, { Suspense } from "react";
import Button from './ui/Button';


interface pageProps{}

const Landing : FC<pageProps> = ({}) =>{
    return <section className='sticky top-0 mx-auto flex h-screen max-w-[900px] xl:max-w-[1350px] items-center justify-between'>
        <div className='space-y-10 px-10'>
            <h1 className='space-y-5 tracking-wider xl:text-7xl'>
                {/* <span className=' block font-extrabold text-6xl'>Powered By</span> */}
                <span className='text-5xl font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2'>Powered By AI</span>
                <span className='text-5xl font-extrabold block'>Driven By</span>
                <span className='text-6xl font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Lawyers</span>
            </h1>

            <div className='space-x-8'>
                <Button title='Explore' login={false}/>
                <a className='link'>Learn More</a>
            </div>
        </div>
        <div className='hidden relative h-[400px] w-[400px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px]'>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={.8} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.7}>
                <MeshDistortMaterial
                //   color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={.8}
                >
                    <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['#06beb6', '#48b1bf']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
         </MeshDistortMaterial>
              </Sphere>
            </Suspense>
          </Canvas>
            <Image src='/62.png' fill={true} alt="law-ai" style={{objectFit: "contain"}}/>
        </div>
    </section>
}

export default Landing