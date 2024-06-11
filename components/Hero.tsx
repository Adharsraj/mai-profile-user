import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Hero = ({ title, desc, image, button }: HeroProps) => {
  return (
    <div className="bg-primary-blue text-white font-concord pt-2 lg:pt-24 rounded-bl-[10vw] bg-fixed">
      <div className="px-2 max-w-[1400px]  mx-auto lg:px-[10vw] md:px-[5vw]">
      <div className="md:flex md:items-start">
      <div className={cn({ "md:pt-10 lg:pt-14": !button })}>
            <h1 className="text-4xl md:text-[42px] lg:text-6xl xl:whitespace-nowrap font-medium w-[250px]  md:w-full md:tracking-wide leading-[45px] md:leading-[50px] mx-auto md:mx-0">
              {title.line1} <br />
              {title.line2} <br />
              {title.line3}
            </h1>
            <p className="text-[10px]  lg:text-[14px] md:text-[12px] w-[250px] lg:w-[90%] xl:w-[60%] lg:pt-2 font-normal mx-auto mt-2 md:mt-3 md:tracking-wide md:leading-4 lg:leading-6 leading-3 md:mx-0 md:w-[300px]">
              {desc}
            </p>
              {button && (
            <div className="px-3 md:px-0 md:pt-6 md:pb-14 pt-4 lg:pt-8 lg:pb-40 hidden md:flex md:gap-3">
                <>
                  <Button className="bg-primary-yellow w-full md:w-auto h-9 text-[11.5px] lg:h-full lg:p-3 lg:text-lg font-normal tracking-wider">
                    {button?.one}
                  </Button>
                  <span className="flex justify-center items-center text-sm pt-2 pb-1 tracking-wider text-[11.5px] lg:text-lg">
                    {button?.two}
                  </span>
                </>
            </div>
              )}
          </div>
          
          <Image
            src={image.src}
            width={284}
            height={190}
            alt={image.alt}
            priority={true}
            className="mx-auto pt-4 md:pt-0 md:w-[358px] max-h-[360px] lg:mb-32  md:mb-28 lg:w-[44vw] xl:max-w-[38vw] lg:mr-[-6.8vw]"
          />
        </div>
        <div className="px-3 pt-4 md:hidden">
          {button && (
            <>
              <Button className="bg-primary-yellow w-full h-9 text-[11.5px] font-normal tracking-wider">
                Create your card
              </Button>
              <span className="flex justify-center items-center text-sm pt-2 pb-1 tracking-wider text-[11.5px]">
                Learn more
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
