import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShare2, FiHeart, FiBarChart2, FiArrowRight } from "react-icons/fi";
import home from "../assets/home.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/product5.png";
import products from "../Data/Products";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [two, three, four];
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="h-[70vh] md:h-screen relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={home}
            alt="Hero Section"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 md:top-1/2 md:right-10 md:left-auto md:transform md:-translate-y-1/2 bg-[#FFF3E3] text-gray-800 bg-opacity-50 p-6 md:p-10 rounded-lg shadow-lg w-auto md:w-1/2 max-w-[500px] aspect-[4/3] flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">Discover Our New Collection</h1>
            <p className="mt-3 text-sm md:text-base">
              Discover premium furniture collections that bring comfort and style to your home.
              Browse our extensive catalog and find the perfect piece for your space.
            </p>
          </div>
          <div className="flex justify-start mt-4">
            <button className="bg-[#B88E2F] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-medium hover:bg-[#A07D28] transition"
              onClick={() => navigate("/shop")}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Browse The Range Section */}
      <div className="text-center mt-6 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">Browse The Range</h1>
        <p className="text-sm md:text-lg text-gray-600 mt-2">This is the subtitle describing the content.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6 px-4 md:px-30 gap-4">
        <div className="w-full md:w-1/3">
          <img src={one} alt="Image 1" className="w-full h-auto object-cover rounded-lg" />
          <p className="text-center text-xl md:text-2xl font-semibold mt-2">Dining</p>
        </div>
        <div className="w-full md:w-1/3">
          <img src={two} alt="Image 2" className="w-full h-auto object-cover rounded-lg" />
          <p className="text-center text-xl md:text-2xl font-semibold mt-2">Living</p>
        </div>
        <div className="w-full md:w-1/3">
          <img src={three} alt="Image 3" className="w-full h-auto object-cover rounded-lg" />
          <p className="text-center text-xl md:text-2xl font-semibold mt-2">Bedroom</p>
        </div>
      </div>

      {/* Our Products Section */}
<div className="mt-10 md:mt-16 px-4 md:px-20">
  <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">Our Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {products.slice(0, 8).map((product) => (
      <div key={product.id} className="rounded-lg shadow-md overflow-hidden group relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-72 object-cover"
        />
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center space-x-1 bg-white px-2 py-1 md:px-3 md:py-1 rounded shadow hover:bg-gray-100 cursor-pointer">
            <FiShare2 size={14} />
            <span className="text-xs md:text-sm">Share</span>
          </div>
          <div className="flex items-center space-x-1 bg-white px-2 py-1 md:px-3 md:py-1 rounded shadow hover:bg-gray-100 cursor-pointer">
            <FiBarChart2 size={14} />
            <span className="text-xs md:text-sm">Compare</span>
          </div>
          <div className="flex items-center space-x-1 bg-white px-2 py-1 md:px-3 md:py-1 rounded shadow hover:bg-gray-100 cursor-pointer">
            <FiHeart size={14} />
            <span className="text-xs md:text-sm">Like</span>
          </div>
        </div>
        <div className="p-3 md:p-4 text-start">
          <h2 className="text-base md:text-lg font-semibold">{product.name}</h2>
          <p className="text-xs md:text-sm text-gray-600">{product.category}</p>
          <p className="text-sm md:text-md font-bold text-[#B88E2F] mt-1">{product.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Three Column Section */}
      <div className="mt-10 md:mt-20 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 order-1 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold">Create Your Dream Space</h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Explore our exclusive collection of modern furniture designed to elevate every corner of your home.
            </p>
            <button className="bg-[#B88E2F] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-medium w-fit hover:bg-[#A07D28] transition">
              Explore Now
            </button>
          </div>
          <div className="order-3 md:order-2">
            <img 
              src={one} 
              alt="Living Room" 
              className="rounded-lg object-cover w-full h-[200px] md:h-[400px]" 
            />
          </div>
          <div className="relative order-2 md:order-3">
            <img
              src={carouselImages[currentIndex]}
              alt="Carousel Slide"
              className="rounded-lg object-cover w-full h-[200px] md:h-[400px] transition duration-500"
            />
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              <FiArrowRight size={20} className="text-[#B88E2F]" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full border-2 ${
                    currentIndex === idx
                      ? "border-[#B88E2F] bg-[#B88E2F]"
                      : "border-[#B88E2F]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20 px-4 md:px-20">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold">Share Your Setup with</h1>
          <h2 className="text-2xl md:text-4xl font-bold">#FurniroFurniture</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-4">
          <div className="grid gap-2 md:gap-4">
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
            </div>
          </div>
          <div className="grid gap-2 md:gap-4">
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
            </div>
          </div>
          <div className="hidden md:grid gap-4">
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
            </div>
          </div>
          <div className="hidden md:grid gap-4">
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
