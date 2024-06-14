import React from 'react';
import Link from 'next/link';

const Blogpage: React.FC = () => {
  const gridItems = [
    {
      imgSrc: "/images/blog/grid1.svg",
      imgAlt: "Grid 1",
      title: "Mai Profile News Letter 2024",
      description: "Over the past few months we have been hard at work adding new features to mai profile.",
      titleWidth: "w-[220px]"
    },
    {
      imgSrc: "/images/blog/grid2.svg",
      imgAlt: "Grid 2",
      title: "What is the correct approach to Business Networking?",
      description: "Networking isn't just for you. It's also for your business. Learn how to master business Networking.",
      titleWidth: "w-[300px]"
    },
    {
      imgSrc: "/images/blog/grid3.svg",
      imgAlt: "Grid 3",
      title: "How to Create a Virtual Background",
      description: "Learn how to create your own custom, professional virtual background for free with Mai profile.",
      titleWidth: "w-[220px]"
    },
    {
      imgSrc: "/images/blog/grid4.svg",
      imgAlt: "Grid 4",
      title: "Want to meet people faster? Use this QR code Generator and Reader",
      description: "QR codes are popping up everywhere. Learn why they are so popular, how they work, and which QR code generator and reader use while networking.",
      titleWidth: "w-[310px]"
    },
    {
      imgSrc: "/images/blog/grid5.svg",
      imgAlt: "Grid 5",
      title: "How To Use a Virtual Background With Skype",
      description: "Joining a Skype call? Learn how to create and use a virtual background in Skype with these four steps.",
      titleWidth: "w-[300px]"
    }
  ];

  return (
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
          src="/images/blog/blogframe.svg"
          alt="Image Description"
          className="w-auto h-auto rounded-lg md:w-1200px "
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-left">How to Customize Digital Business Cards?</h2>
      <p className="text-black-600 mb-4 text-left text-md lg:w-[760px]">
        So, you have a digital business card. What now? In this step-by-step guide, learn how to customize your virtual card, from design to contact details.
      </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridItems.map((item, index) => (
          <div key={index} className="text-center">
            <Link href={`/blog/${index}`}>
              {/* Using a styled <div> as a wrapper */}
              <div className="cursor-pointer block">
                <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-auto rounded-lg" />
                <h3 className={`text-md sm:text-md ${item.titleWidth} font-bold mx-auto mt-2`}>{item.title}</h3>
                <p className="text-black-600 mb-4 text-[13px] mt-6 ">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Blogpage;
