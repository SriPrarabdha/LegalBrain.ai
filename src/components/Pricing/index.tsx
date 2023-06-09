"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Lawfirm from "../Contact/Lawfirm"
import Institution from "../Contact/Institution"

type BillingInterval = "indi" | "firm" | "institution";
// type Interval = "lifetime" | "year" | "month";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("indi");

  // const [interval, setInterval] = useState<Interval>("month");

  return (
    <section
      id="pricing"
      className="relative z-10 py-8 md:py-8 lg:py-20  bg-zinc-100"
    >
      <div className="container mx-auto px-4 md:px-16 ">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Experience the unbeatable value of our pricing plans, tailored to fit your legal needs and backed by the cutting-edge capabilities of LawGPT, the leading AI-powered legal assistant."
          center
          width="665px"
        />

        

        {/* //////////////  plans type  */}
        <div className="sm:flex sm:flex-col sm:align-center">
          <div className="relative self-center mb-10 bg-white rounded-lg p-0.5 flex sm:mt-8">
            <button
              onClick={() => {
                setBillingInterval("indi");
              }}
              type="button"
              className={`${
                billingInterval === "indi"
                  ? "relative w-1/2 bg-indigo-500 shadow-sm text-white"
                  : "ml-0.5 relative w-1/2 border border-transparent text-gray-400"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Individual
            </button>

            <button
              onClick={() => {
                setBillingInterval("firm");
              }}
              type="button"
              className={`${
                billingInterval === "firm"
                  ? "relative w-1/2 bg-indigo-500 shadow-sm text-white"
                  : "ml-0.5 relative w-1/2 border border-transparent text-gray-400"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Law Firm
            </button>

            <button
              onClick={() => {
                setBillingInterval("institution");
              }}
              type="button"
              className={`${
                billingInterval === "institution"
                  ? "relative w-1/2 bg-indigo-500 shadow-sm text-white"
                  : "ml-0.5 relative w-1/2 border border-transparent text-gray-400"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap   focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Institution
            </button>
          </div>
        </div>

        {/* // plans type end */}


        {billingInterval === "indi"
          && 
          <div className="w-full">
            <div
              className=" mb-8 flex justify-center md:mb-12 lg:mb-16"
              
            >
              <span
                onClick={() => setIsMonthly(true)}
                className={`${
                  isMonthly ? "pointer-events-none text-dark" : "text-body-color"
                } mr-4 cursor-pointer font-semibold`}
              >
                Monthly
              </span>
              <div
                onClick={() => setIsMonthly(!isMonthly)}
                className="flex cursor-pointer items-center"
              >
                <div className="relative">
                  <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                  <div
                    className={`${
                      isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 transition`}
                  >
                    <span className="active h-4 w-4 rounded-full bg-white"></span>
                  </div>
                </div>
              </div>
              <span
                onClick={() => setIsMonthly(false)}
                className={`${
                  isMonthly ? "pointer-events-none text-body-color" : "text-dark "
                } ml-4 cursor-pointer  font-semibold`}
              >
                Yearly
              </span>
            </div>
          </div>
  
        }
        

        {billingInterval === "indi" && <div className="m-8 grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "499" : "49999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=" Quality legal assistance made affordable with LawGPT Lite."
          >
            <OfferList text="Chat with Docs" status="active" />
            <OfferList text="Law GPT" status="active" />
            <OfferList text="AI-Powered Drafting" status="inactive" />
            <OfferList text="Judgment/Cases Finder" status="inactive" />
            <OfferList text="Transliteration" status="inactive" />
            <OfferList text="Email Support" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "499" : "49999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Essential legal solutions made simple with LawGPT Basic."
          >
            <OfferList text="Chat with Docs" status="active" />
            <OfferList text="Law GPT" status="active" />
            <OfferList text="AI-Powered Drafting" status="active" />
            <OfferList text="Judgment/Cases Finder" status="active" />
            <OfferList text="Transliteration" status="inactive" />
            <OfferList text="Email Support" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "699" : "59999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=" Quality legal assistance made affordable with LawGPT Lite"
          >
            <OfferList text="Chat with Docs" status="active" />
            <OfferList text="Law GPT" status="active" />
            <OfferList text="AI-Powered Drafting" status="active" />
            <OfferList text="Judgment/Cases Finder" status="active" />
            <OfferList text="Transliteration" status="active" />
            <OfferList text="Email Support" status="active" />
          </PricingBox>
        </div>}

       { billingInterval==="firm"  && <Lawfirm/>}

       { billingInterval==="institution"  && <Institution/>}

      </div>
    </section>
  );
};

export default Pricing;
