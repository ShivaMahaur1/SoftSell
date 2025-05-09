import React from 'react';
import { testimonials } from '../assets/assests';
import { FaStar } from 'react-icons/fa'; 

const Testimonials = () => {
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-lg text-gray-600 md:max-w-2xl md:mx-auto">
          Discover how our solutions have helped businesses across industries achieve their goals and drive success.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="relative bg-white shadow-2xl shadow-black rounded-lg p-6">
            {/* Circular Image */}
            <div className="absolute -top-6 right-6 w-16 h-16 rounded-full overflow-hidden  border-blue-500">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            

            {/* Testimonial Content */}
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                “{testimonial.quote}”
              </p>
            </div>

            {/* Mobile Divider */}
            {index !== testimonials.length - 1 && (
              <hr className="md:hidden mt-8 border-t-2 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;