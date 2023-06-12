import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 ">
      <div className="container mx-auto">
        <div className=" px-6 flex flex-wrap items-center md:px-20">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[450px] text-center lg:m-0"
              
            >
              <Image
                src="/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div className="max-w-[470px]" >
              <div className="mb-9">
                {/* <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3> */}
                <p className="text-base leading-relaxed  sm:text-lg sm:leading-relaxed">
                At LegalBrain.ai, we understand the unique challenges faced by legal professionals. That's why we have developed a suite of powerful features designed specifically for the legal industry.
                </p>
                <br />
                <p className="text-base leading-relaxed  sm:text-lg sm:leading-relaxed">
                We are passionate about transforming the legal industry through technology. We are committed to providing lawyers with the tools they need to thrive in an ever-evolving legal landscape.
                </p>
                <br />
                <p className=" leading-relaxed text-base sm:text-lg sm:leading-relaxed">
                Join us on this exciting journey as we redefine the possibilities of legal work and empower legal professionals worldwide. Get in touch with us today to learn more about how our AI-powered solutions can benefit your practice.
                </p>
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
