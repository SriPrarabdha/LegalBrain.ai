// import { Feature } from "@/types/feature";
'use client'
import { motion } from "framer-motion";

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full sm:px-10 ">
      
      <div className="wow fadeInUp ">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-blue-400 bg-opacity-10 text-primary hover:bg-opacity-20">
          {icon}
        </div>
        
        <h3 className="mb-5 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[2px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
