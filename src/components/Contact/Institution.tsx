"use client";
import { useState } from "react";

const Institution = () => {
  const [details, setDetails] = useState({
    product: "platinum",
  });

  const handleChange = (event: any) => {
    setDetails(event.target.value);
  };

  return (
    <section id="contact" className="overflow-hidden mx-auto py-10 lg:py-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-[70%] md:mx-auto">
            <div className="mb-12 rounded-md bg-gray-200 py-11 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Please fill in your contact details in the form below if you
                would like us to contact you with additional information
                regarding our product.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Name of Institution
                      </label>
                      <input
                        type="text"
                        placeholder="Instituion Name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  placeholder-body-color shadow-one outline-none focus:border-slate-300 focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Number of Members
                      </label>
                      <input
                        type="number"
                        placeholder="Members"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  placeholder-body-color shadow-one outline-none focus:border-slate-300 focus-visible:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Product Interested In
                      </label>
                      <select
                        value={details.product}
                        onChange={handleChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  placeholder-body-color shadow-one outline-none focus:border-slate-300  focus-visible:shadow-none "
                      >
                        <option value="platinum">Platinum</option>
                        <option value="plus">Platinum Plus</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Availability of Static IP
                      </label>
                      <select
                        onChange={handleChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  placeholder-body-color shadow-one outline-none focus:border-slate-300  focus-visible:shadow-none "
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Contact Person
                      </label>

                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  shadow-one outline-none focus:border-slate-300  focus-visible:shadow-none "
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                      
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Phone Number
                      </label>

                      <input
                        type="number"
                        placeholder="XXXXX XXXXX"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  shadow-one outline-none focus:border-slate-300  focus-visible:shadow-none "
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  placeholder-body-color shadow-one outline-none focus:border-slate-300  focus-visible:shadow-none "
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        City
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base  placeholder-body-color shadow-one outline-none focus:border-slate-300  focus-visible:shadow-none "
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button className="rounded-md bg-indigo-500 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institution;
