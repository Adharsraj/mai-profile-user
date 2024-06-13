import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { featuresHome } from "@/constants";
import { CircleUserRound } from "lucide-react";
import howitworks from "../../public/Images/features/howitwork.svg";
import Hero from "@/components/Hero";
import TestimonialSliderCard from "@/components/Testimonials-slider-card";
import CarouselSlider from "@/components/Carousel-Slider";
import { rings } from "@/constants/SvgComponents";
import HowItWorkSlider from "@/components/HowItWorkSlider";

const Home = () => {
  const heroProps = {
    title: {
      line1: "Empower",
      line2: "Your Presence",
    },
    desc: "Enhance your professional presence with our innovative platform featuring streamlined portfolio creation and NFC digital visiting cards. Reduce the hassle with our intuitive tools.",
    image: {
      src: "/Images/hero/home.svg",
      alt: "heroimage",
    },
    button: {
      one: "Create your card",
      two: "Learn more",
    },
  };

  const testimonials = [
    {
      quote:
        "Mai Profile has completely transformed the way I present myself professionally. The portfolio maker allowed me to curate a visually appealing showcase of my work, while the NFC digital visiting cards have made networking effortless. Highly recommend!",
      name: "Rose Roberson",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=1",
      rating: 4,
    },
    {
      quote:
        "Mai Profile has completely transformed the way I present myself professionally. The portfolio maker allowed me to curate a visually appealing showcase of my work, while the NFC digital visiting cards have made networking effortless. Highly recommend!",
      name: "John",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=2",
      rating: 3,
    },
    {
      quote:
        "Mai Profile has completely transformed the way I present myself professionally. The portfolio maker allowed me to curate a visually appealing showcase of my work, while the NFC digital visiting cards have made networking effortless. Highly recommend!",
      name: "Denver",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=3",
      rating: 5,
    },
  ];

  const carouselSlideContent = [
    {
      quote:
        "With drag-and-drop functionality, adding images, videos, text, and links is easier than ever.",
      name: "Streamlined Portfolio Creation: Showcase Your Best Work with Ease",
      role: "CEO at Company",
      imgSrc: "/Images/carousel/split-1.svg",

      rating: 4,
    },
    {
      quote:
        "Our NFC digital visiting cards leverage cutting-edge technology to enable seamless contact sharing and dynamic content updates.",
      name: "NFC Digital Visiting Cards: Revolutionize Networking with a Single Tap",
      role: "CEO at Company",
      imgSrc: "/Images/carousel/split-2.svg",

      rating: 4,
    },
    {
      quote:
        "With our user-friendly platform, you can effortlessly showcase your skills, while our innovative NFC technology simplifies networking with just a tap.",
      name: "Why Choose Maiprofile ?",
      role: "CEO at Company",
      imgSrc: "/Images/carousel/split-3.svg",

      rating: 4,
    },
  ];
  return (
    <>
      {/* hero */}
      <Hero {...heroProps} />

      {/* Features */}
      <div className="px-2 max-w-[1400px] mx-auto lg:pt-12 lg:px-[10vw] md:px-[5vw] pt-6 font-concord font-normal">
        <span className="bg-primary-blue lg:rounded-full lg:p-4  lg:w-32 lg:text-sm text-white p-2 mx-auto rounded-md justify-center  flex w-16 text-xs  ">
          Features
        </span>
        <p className="text-[20px] font-medium text-[#242331] px-4 tracking-wide lg:pt-6 lg:pb-10 md:text-2xl lg:text-4xl  md:leading-6 text-center md:mb-10 leading-5 pt-2">
          Streamlined Portfolio Creation & <br /> NFC Digital Visiting Cards
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuresHome.map((m) => {
            const titleWords = m.title.split(" ");
            const formattedTitle = [];
            for (let i = 0; i < titleWords.length; i += 2) {
              formattedTitle.push(
                <React.Fragment key={i}>
                  {titleWords.slice(i, i + 2).join(" ")}
                  {i + 2 < titleWords.length && <br />}
                </React.Fragment>
              );
            }

            return (
              <div key={m.id}>
                <Image
                  src={m.image}
                  width={255}
                  height={190}
                  alt="hero"
                  className={`mx-auto pt-4 mt-2 md:h-[120px] lg:h-[164px]  md:pt-0 ${m.id === 1 ? "scale-110 lg:scale-125 xl:scale-150 lg:pt-5 " : "md:w-[358px]  lg:w-[44vw]"}`}
                />
                <p className="text-[20px] lg:text-2xl lg:leading-6 px-4 text-center leading-5 pt-4 text-[#242331] lg:pt-12 whitespace-nowrap">
                  {formattedTitle}
                </p>
                <p className="text-[#797979] text-[10px] md:text-[12px] lg:text-[16px] md:w-48 lg:w-full lg:px-1 lg:pt-5 md:mx-auto text-center pt-2 pb-1">
                  {m.desc}
                </p>
                <p className="underline text-primary-blue text-[10px] text-center lg:text-sm lg:pt-8">
                  Learn more
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Carousel-content */}

      <div className=" max-w-[1600px] overflow-hidden mx-auto lg:pl-[10vw] xl:pt-32 xl:pb-6 md:pl-[5vw]  lg:pt-12 pt-6 font-concord font-normal ">
        <CarouselSlider testimonials={carouselSlideContent} />
      </div>
      {/* How it works */}
      <div className="relative">
      <HowItWorkSlider/>
        {/* testimonial-content */}
        <div className="bg-primary-blue">
          <div className="px-2 max-w-[1400px]   relative overflow-hidden mx-auto lg:pt-12 lg:px-[10vw] md:px-[5vw] pt-6 font-concord font-normal ">
            <span className="bg-primary-yellow lg:rounded-full lg:p-4 xl:mt-24  lg:w-32 lg:text-sm xl:mb-5 text-black p-2 mb-2 mx-auto rounded-md justify-center flex w-24 text-xs  ">
              Testimonial{" "}
            </span>
            <p className="text-xl text-white text-center mx-auto w-full pb-5 xl:pb-8 lg:text-2xl xl:text-4xl">
              Trusted by millions of customers.
            </p>
            <p className="text-white text-[72px] xl:text-[80px] absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-[42%]  ">
              “
            </p>
            <TestimonialSliderCard testimonials={testimonials} />
          </div>
        </div>
        <div className="">
          <div className="absolute  xl:top-24 md:top-10 lg:top-24 left-0 max-w-[600px]  ">
            <Image
              className="hidden md:flex w-[21vw] "
              src={rings.rightCut}
              width={80}
              height={100}
              alt="phone"
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
