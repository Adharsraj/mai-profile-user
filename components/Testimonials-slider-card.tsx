"use client";

import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types/testimonial";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <>
      <section className="w-full py-4">
        <div className="mx-auto lg:max-w-6xl px-3">
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
                <CarouselItem key={index} className="">
                  <div className="flex flex-col px-4  sm:p-6">
                    <q className="flex-1 text-white w-[280px] md:w-[360px] xl:w-[750px] xl:text-lg md:text-[12px] lg:w-[580px] lg:text-base mx-auto text-center text-[10px] ">
                      {testimonial.quote}
                    </q>
                    <div className="mt-6 mx-auto justify-center items-center flex flex-col ">
                      <span className="inline-flex rounded-full">
                        <Image
                          loader={imageLoader}
                          className="h-16 w-16 xl:h-20 xl:w-20 rounded-full"
                          height={40}
                          width={40}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </span>
                      <div className="xl:mb-36">
                        <p className=" mt-2 text-lg xl:text-2xl text-center text-white">
                          {testimonial.name}
                        </p>{" "}
                        <div className="flex justify-center items-center mx-auto gap-2 ">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4  ${i < testimonial.rating ? "text-yellow-300" : "text-gray-300"}`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-1 top-[18%] -translate-y-1/2 border-none bg-primary-yellow xl:h-14 xl:w-14" />
            <CarouselNext className="absolute -right-1 top-[18%] -translate-y-1/2 border-none bg-primary-yellow xl:h-14 xl:w-14" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
