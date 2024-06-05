import Image from "next/image";
import React from "react";
import hero from "../../public/Images/hero/home.svg";
import { Button } from "@/components/ui/button";
import { featuresHome } from "@/constants";
import { CircleUserRound } from "lucide-react";
import howitworks from '../../public/Images/features/howitwork.svg'
const Home = () => {
  return (
    <>
      {/* hero */}
      <div className=" bg-primary-blue text-white font-concord pt-2 lg:pt-24 rounded-bl-[10vw] ">
        <div className="px-2 max-w-[1400px] mx-auto lg:px-[10vw] md:px-[5vw]">
          <div className="md:flex md:items-start">
            <div>
              <h1 className="text-4xl md:text-[42px] lg:text-6xl xl:whitespace-nowrap font-medium w-[250px]  md:w-full md:tracking-wide leading-[45px] md:leading-[50px] mx-auto md:mx-0">
                Empower <br />
                Your Presence
              </h1>
              <p className="text-[10px]  lg:text-[14px] md:text-[12px] w-[250px] lg:w-[90%] xl:w-[60%] lg:pt-2 font-normal mx-auto mt-2 md:mt-3 md:tracking-wide md:leading-4 lg:leading-6 leading-3 md:mx-0 md:w-[300px]">
                Enhance your professional presence with our innovative platform
                featuring streamlined portfolio creation and NFC digital
                visiting cards. Reduce the hassle with our intuitive tools.
              </p>
              <div className="px-3 md:px-0 md:pt-6 md:pb-14 pt-4 lg:pt-8 lg:pb-40 hidden md:flex md:gap-3">
                <Button className="bg-primary-yellow w-full md:w-auto h-9 text-[11.5px] lg:h-full lg:p-3 lg:text-lg font-normal tracking-wider">
                  Create your card
                </Button>
                <span className="flex justify-center items-center text-sm pt-2 pb-1 tracking-wider text-[11.5px] lg:text-lg">
                  Learn more
                </span>
              </div>
            </div>
            <Image
              src={hero}
              width={284}
              height={190}
              alt="hero"
              className="mx-auto pt-4 md:pt-0 md:w-[358px] lg:w-[44vw] xl:max-w-[38vw] lg:mr-[-6.8vw]"
            />
          </div>

          <div className="px-3 pt-4 md:hidden">
            <Button className="bg-primary-yellow w-full h-9 text-[11.5px] font-normal tracking-wider">
              Create your card
            </Button>
            <span className="flex justify-center items-center text-sm pt-2 pb-1 tracking-wider text-[11.5px]">
              Learn more
            </span>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="px-2 max-w-[1400px] mx-auto lg:pt-12 lg:px-[10vw] md:px-[5vw] pt-6 font-concord font-normal">
        <span className="bg-primary-blue lg:rounded-full lg:p-4  lg:w-32 lg:text-sm text-white p-2 mx-auto rounded-md justify-center flex w-16 text-xs  ">
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
      <div>
        <h1 className="bg-black h-[30vh] w-full text-center text-white flex justify-center items-center">
          Carousel
        </h1>
      </div>
      {/* How it works */}
      <div className="px-2 max-w-[1400px] mx-auto lg:pt-12 lg:px-[10vw] md:px-[5vw] pt-6 font-concord font-normal pb-16">
        <span className="bg-primary-blue lg:rounded-full lg:p-4  lg:w-32 lg:text-sm text-white p-2 mx-auto rounded-md justify-center flex w-24 text-xs  ">
          How It Work{" "}
        </span>
        <p className="text-[20px] font-medium text-primary-blue px-4 tracking-wide lg:pt-6 lg:pb-1 md:text-2xl lg:text-4xl  md:leading-6 text-center md:mb-5 leading-5 pt-2">
          Work smarter <br />
          with easy access for user..{" "}
        </p>
      
        <div className="flex text-[10px] md:text-base xl:text-[22px] lg:text-xl justify-around gap-2 pt-4">
          <span className="bg-primary-blue xl:p-7 xl:rounded-2xl xl:px-20 text-white p-2 md:p-4 md:px-8 lg:p-6          lg:px-14 whitespace-nowrap rounded-md">
            01. Create account
          </span>
          <span className="bg-[#F9F9F9] p-2 xl:p-7 xl:rounded-2xl xl:px-20 md:p-4 md:px-8 lg:p-6 lg:px-14  whitespace-nowrap rounded-md  ">
            02. Enter your details
          </span>
          <span className="bg-[#F9F9F9] p-2 xl:p-7 xl:rounded-2xl xl:px-20 md:p-4 md:px-8 lg:p-6 lg:px-14  whitespace-nowrap rounded-md">
            03. Share the Link
          </span>
        </div>
        <div className="pt-10 lg:pt-16">
          <div className="flex justify-center md:justify-between items-start md:px-4 lg:px-14">
            <div>
              <div className="flex gap-2 md:gap-4 lg:gap-6 items-center">
                <CircleUserRound className="w-7 h-7 md:w-14 md:h-14 lg:w-16  lg:h-16 text-primary-blue" />
                <p className="text-lg leading-5 md:text-xl lg:text-3xl lg:leading-8  md:leading-5">
                  Create your account <br />& start your work
                </p>
              </div>
              <p className="text-[10px] text-[#797979] pt-2 pb-3 lg:pt-8 lg:pb-10 lg:text-base lg:w-[380px] xl:w-[430px] md:w-[300px] md:pb-5 md:text-[12px]">
                Creating an account is your gateway to unlocking a world of
                professional networking possibilities.
              </p>
              <span className="bg-primary-blue text-white p-2 md:text-sm lg:p-4 lg:px-9   rounded-lg lg:rounded-full text-[10px]">
                Get started
              </span>
            </div>

            <div className="lg:flex lg:justify-end">
              <Image src={howitworks} width={284} height={190} alt="hero" className="xl:w-3/4 lg:w-full" />
            </div>

          </div>
        </div>
      </div>
      {/* testimonial-content */}
      <div>
        <h1 className="bg-black h-[30vh] w-full text-center text-white flex justify-center items-center">
          Testimonial
        </h1>
      </div>
    </>
  );
};

export default Home;
