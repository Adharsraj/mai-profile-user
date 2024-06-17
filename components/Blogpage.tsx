import React from 'react';
import { Link } from 'next-view-transitions';
import { blogCards } from "@/constants/BlogData";
import { MaxWidthWrapper } from '@/components/ui/MaxWidthWrapper';

const Blogpage: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4">
        <h1 className="text-sm font-bold mb-4 lg:text-3xl text-center">Mai Profile Blog</h1>
        <div className="flex justify-center items-center h-full lg:h-auto">
          <p className="mb-4 text-sm lg:text-xl text-center lg:w-[800px] md:w-[500px]">
            Read my profile blog for the latest features and updates, and find out about the newest networking tips and tools.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="placeholder:text-xs sm:placeholder:text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-[800px] md:w-[500px]"
          />
          <button className="px-4 py-2 bg-[#2C1047] text-white rounded-lg">Search</button>
        </div>

        <div className="mb-4">
          <img
            src="/images/blog/grid6.svg"
            alt="Image Description"
            className="w-auto h-auto rounded-lg md:w-1200px"
          />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-left">How to Customize Digital Business Cards?</h2>
        <p className="text-black-600 mb-4 text-left text-md lg:w-[760px]">
          So, you have a digital business card. What now? In this step-by-step guide, learn how to customize your virtual card, from design to contact details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogCards.map((item, index) => (
            <div key={index} className="text-center">
              <Link href={`/blog/${item.id}`}>
                <div className="cursor-pointer block">
                  <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-auto rounded-lg" />
                  <h3 className={`text-md sm:text-md ${item.titleWidth} font-bold mx-auto mt-2`}>{item.title}</h3>
                  <h3 className={`text-md sm:text-sm mx-auto mt-2`}>{item.description}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Blogpage;
