'use client'
import React, { useEffect } from "react";
import { Link } from "next-view-transitions";
import { truncateTitle } from "@/lib/textChanger";
import Hero from "@/components/Hero";
import { SignupFormDemo } from "@/components/ContactForm";
import { blogCards } from "@/constants/BlogData";

const Blogpage: React.FC = () => {
    const heroProps = {
        title: {
            line1: "Exploring the",
            line2: "Power of NFC",
            line3: "Cards"
        },
        desc: "Discover how NFC business cards are revolutionizing networking in our latest blog post.",
        image: {
            src: "/Images/hero/blg.svg",
            alt: "heroimage",
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero {...heroProps} />
            <div
                className="font-concord font-normal px-2 max-w-[1400px] 3xl:max-w-[1920px] mx-auto lg:px-[10vw] md:px-[5vw]"
            >
                <h1 className="text-xl text-center mt-4 mb-4 lg:text-3xl lg:mt-8 xl:text-4xl xl:mt-12">
                    Mai Profile Blog
                </h1>
                <p className="text-[10px] text-center mb-4 lg:text-xl lg:w-[700px] xl:w-[900px] mx-auto xl:text-2xl xl:pb-8 opacity-90">
                    Read my profile blog for the latest features and updates, and find out about the newest networking tips and tools.
                </p>

                <div className="flex justify-center items-center space-x-4 mb-6 xl:pb-14">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="placeholder:text-xs sm:placeholder:text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-[800px] xl:w-full md:w-[500px]"
                    />
                    <button className="px-4 py-2 bg-[#2C1047] text-white rounded-lg">
                        Search
                    </button>
                </div>

                <div className="mb-4">
                    <img
                        src="/images/blog/mainImage.svg"
                        alt="Image Description"
                        className="w-full md:h-[350px] h-[210px] lg:h-[500px] xl:h-[560px] object-cover rounded-lg"
                    />
                </div>

                <h2 className="text-xl md:text-2xl mb-4 text-left w-[70%] leading-6 xl:text-3xl xl:mt-8">
                    How to Customize digital Business Cards?
                </h2>
                <p className="text-[10px] md:text-xs md:w-[85%] lg:text-base leading-3 xl:text-lg xl:leading-5">
                    So, you have a digital business card. What now? In this step-by-step guide, learn how to customize your virtual card, from design to contact details.
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-5 px-4 xl:px-0 xl:gap-16 xl:pt-16">
                    {blogCards.map((item, index) => (
                        <div key={index} className="text-center pt-6 md:pt-3 relative z-30 bg-white">
                            <Link href={`/blog/${item.title}`}>
                                <div className="cursor-pointer">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.imgAlt}
                                        className="w-full h-auto"
                                    />
                                    <h3 className="text-xl px-4 md:h-[60px] md:mt-6">
                                        {truncateTitle(item.title, 10)}
                                    </h3>
                                    <p className="mb-4 opacity-60 mt-6 text-[10px] leading-3 xl:text-xs">
                                        {truncateTitle(item.passageMain, 20)}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-primary-blue">
                <SignupFormDemo />
            </div>
        </>
    );
};

export default Blogpage;
