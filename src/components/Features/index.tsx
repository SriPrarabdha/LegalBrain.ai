'use client'
import SectionTitle from "./SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Features = () => {
  return (
    <>
    {/* rgb(231 236 238 / var(--tw-bg-opacity)) */}
      <section
        id="features"
        
        // className="bg-primary/[.03] py-16 md:py-10 lg:py-28 px-20 bg-[url('https://wallpapercave.com/wp/wp6751675.jpg')] ">
        className="bg-primary/[.03] py-20 px-12  md:py-10 md:px-12 lg:py-28    ">
        
        <div className="container mx-auto">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of User of Lorem Ipsum available but the majority have suffered alteration in online Law Suit."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 ">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Features;
