import React from 'react'
import { steps } from '../assets/assests';

const HowItWorks = () => {
    
    
      return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            How It Works
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-8 lg:gap-x-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col shadow-2xl shadow-blue-300 rounded-2xl items-center">
                {/* Step Card */}
                <div className="flex flex-col items-center text-center max-w-xs">
                  {/* Number Circle */}
                  <div className="mb-6 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{React.createElement(step.icon)}</span>
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
    
                {/* Arrow (except for last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block mt-12 md:mt-0 md:absolute md:left-[calc(100%+2rem)] lg:left-[calc(100%+3rem)]">
                    <svg 
                      className="w-8 h-8 text-gray-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

export default HowItWorks