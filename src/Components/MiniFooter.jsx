import React from "react";
import { FiCheckCircle, FiShield, FiTruck, FiHeadphones } from "react-icons/fi";

const featureItems = [
  {
    icon: <FiCheckCircle className="text-[#B88E2F]" />,
    title: "High Quality",
    ariaLabel: "High quality products"
  },
  {
    icon: <FiShield className="text-[#B88E2F]" />,
    title: "Warranty Protection",
    ariaLabel: "Warranty protection"
  },
  {
    icon: <FiTruck className="text-[#B88E2F]" />,
    title: "Free Shipping",
    ariaLabel: "Free shipping"
  },
  {
    icon: <FiHeadphones className="text-[#B88E2F]" />,
    title: "24/7 Support",
    ariaLabel: "24/7 customer support"
  }
];

const MiniFooter = () => {
  return (
    <section 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 p-6 mt-10 rounded-lg"
      aria-label="Features"
    >
      {featureItems.map((item, index) => (
        <div 
          key={index}
          className="flex items-center space-x-4 justify-center md:justify-start"
          aria-label={item.ariaLabel}
        >
          <div className="text-4xl" aria-hidden="true">
            {item.icon}
          </div>
          <p className="font-medium text-gray-800">{item.title}</p>
        </div>
      ))}
    </section>
  );
};

export default MiniFooter;