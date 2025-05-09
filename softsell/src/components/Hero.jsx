import React from 'react'

const Hero = () => {
    
    
      return (
        <div className="bg-white">
          <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
              <h1 className="text-black font-bold text-4xl xl:text-5xl">
                <span className="font-medium text-blue-300"> Soft</span>
                <span className="font-medium text-blue-500"> Sell</span>
              </h1>
              <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                SoftSell is your ultimate solution for buying and selling software effortlessly. Whether you're looking to purchase reliable software tools or sell your own creations, SoftSell provides a seamless platform to connect buyers and sellers in the software marketplace.
              </p>
              <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                <a className="bg-blue-500 hover:bg-blue-600 px-7 py-3 w-full  text-white text-center rounded-md shadow-md block sm:w-auto">
                Get	a Quote
                </a>
                <a className="px-7 py-3 w-full hover:bg-gray-500 hover:text-white bg-white text-black border text-center rounded-md block sm:w-auto">
                Sell My	Licenses
                </a>
              </div>
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
              <img
                src="/image2.png"
                className="w-full mx-auto sm:w-10/12  lg:w-full"
              />
            </div>
          </section>
        </div>
      );
    };
export default Hero