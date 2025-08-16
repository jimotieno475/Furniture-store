import React from 'react';

const About = () => {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-4xl font-bold leading-relaxed">About Us</h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                    The Tale of Our Achievement Story
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Have you evere thought of a beautiful home with a spectaculous interior design with the furnitures just on point .This if Furniro bringing you the best furnitures .  
                    With alot of experience in the field of furnitures we know just the right place to get the perfect furniture for your home to match the theme in your mind ,
                    it is not fantacy but reality . Furniro is here to make your dream home come true with the best furnitures in the market .Just make the call.

                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <StatCard 
                    number="33+ Years" 
                    description="Influencing Digital Landscapes Together" 
                  />
                  <StatCard 
                    number="125+ Projects" 
                    description="Excellence Achieved Through Success" 
                  />
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <StatCard 
                    number="26+ Awards" 
                    description="Our Dedication to Innovation Wins Understanding" 
                  />
                  <StatCard 
                    number="99% Happy Clients" 
                    description="Mirrors our Focus on Client Satisfaction" 
                  />
                </div>
              </div>
            </div>
            <ReadMoreButton />
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img 
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717742431.png" 
                alt="about Us image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted StatCard as a separate component for reusability
const StatCard = ({ number, description }) => (
  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">{number}</h4>
    <p className="text-gray-500 text-base font-normal leading-relaxed">{description}</p>
  </div>
);

// Extracted ReadMoreButton as a separate component
const ReadMoreButton = () => (
  <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
    <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
      Read More
    </span>
    <svg 
      className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
      xmlns="http://www.w3.org/2000/svg" 
      width="18" 
      height="18" 
      viewBox="0 0 18 18" 
      fill="none"
    >
      <path 
        d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" 
        stroke="#4F46E5" 
        strokeWidth="1.6"
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  </button>
);

export default About;
