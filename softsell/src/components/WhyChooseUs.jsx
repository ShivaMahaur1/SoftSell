import React from 'react';
import { features } from '../assets/assests';

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
        Why Choose Us
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="relative bg-white shadow-2xl shadow-blue-400 rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>

              {/* Feature Title */}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h2>

              {/* Feature Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;