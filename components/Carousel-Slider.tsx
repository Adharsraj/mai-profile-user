"use client";

import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";

import Autoplay from "embla-carousel-autoplay";
import blue from "../public/Images/carousel/blue.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types/testimonial";
import { useEffect, useState } from "react";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function CarouselSlider({
  testimonials,
}: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="w-full py-4">
        <div className="">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="relative">
                  <div className="">
                    <div className="px-2 xl:max-w-[800px]">
                      <div className="text-sm max-w-[280px] md:max-w-[420px] lg:max-w-[55vw] xl:max-w-[48vw] px-3 xl:px-10 rounded-xl md:rounded-2xl xl:rounded-[40px] md:min-h-[280px] lg:min-h-[380px] xl:min-h-[530px] bg-[#F9F9F9]">
                        <p className="leading-4 pb-2 max-w-[180px] md:text-2xl lg:text-3xl xl:text-4xl xl:max-w-[450px] md:leading-6 md:max-w-[300px] lg:max-w-[400px] text-[12px] pt-16 xl:pt-36">
                          {testimonial.name}
                        </p>
                        <p className="text-[10px] max-w-[160px] md:pt-4 md:text-xs lg:text-base md:max-w-[300px] xl:max-w-[450px] lg:max-w-[400px] opacity-65 leading-4 mb-2 pb-20">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-10 right-2 md:right-16 md:top-7 lg:top-2 xl:right-20">
                      <Image
                        src={testimonial.imgSrc}
                        width={160}
                        height={130}
                        alt="carousel"
                        className="md:w-[270px] xl:w-[600px] md:object-cover md:rounded-2xl lg:w-[430px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -z-10 top-0 -right-20 md:-right-7 xl:right-0">
              <Image
                src={blue}
                width={120}
                height={130}
                className="md:h-[270px] xl:w-[250px] lg:h-[370px] xl:h-[520px] md:object-cover md:rounded-l-2xl"
                alt="blueimage"
              />
            </div>
            <div className="flex absolute top-8 left-6 gap-2 mt-4 z-30 xl:top-24 xl:left-12">
              {testimonials.map((_, index) => (
                <p
                  key={index}
                  className={`w-8 h-[3px] xl:h-[4px] xl:w-12 rounded-3xl ${
                    index === activeIndex ? "bg-primary-blue" : "bg-gray-300"
                  }`}
                ></p>
              ))}
            </div>
          
            <div>
              <CarouselPrevious className="absolute xl:h-10 xl:w-10 left-4 xl:left-9 top-[200px] lg:top-[290px] md:top-[220px] xl:top-[380px] border-none bg-transparent text-primary-blue" />
              <CarouselNext className="absolute left-9 xl:left-16 top-[200px] md:top-[220px] lg:top-[290px] border-none bg-transparent xl:top-[380px] text-primary-blue" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
