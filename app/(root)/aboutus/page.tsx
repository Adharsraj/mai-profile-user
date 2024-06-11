import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import aplusSmall from "../../../public/Images/aboutus/abtAplusSml.svg";
import aplusLarge from "../../../public/Images/aboutus/abtAplusLrg.svg";
import { ourValues } from "@/constants";
import { SignupFormDemo } from "@/components/ContactForm";

const AboutUs = () => {
  const heroProps = {
    title: {
      line1: "Mai Profile",
      line2: "and Our Vision",
      line3: "for NFC Cards",
    },
    desc: "Explore our range of NFC-enabled solutions and join us in redefining the future of networking.",
    image: {
      src: "/Images/hero/abtus.svg",
      alt: "heroimage",
    },
  };
  return (
    <div>
      <Hero {...heroProps} />
      {/* our journey */}
      <div className="px-2  mx-auto lg:pt-12 lg:px-[10vw] xl:px-[6vw] md:px-[5vw] pt-6 font-concord font-normal">
        <div className="border max-w-[1920px] mx-auto border-primary-yellow rounded-2xl lg:mt-5 ">
          <div className=" max-w-[1400px] mx-auto">
            <p className="text-xl leading-5  xl:pt-14 xl:pb-6 md:pb-3 xl:px-8 text-center pt-2 pb-2 xl:whitespace-nowrap max-w-[300px] lg:text-4xl  lg:max-w-full lg:text-3x md:pt-4 mx-auto md:text-2xl md:max-w-[350px] md:leading-7">
              Our Journey: Crafting Digital Connections with NFC Business Cards
            </p>
            <p className="text-[10px] xl:text-2xl xl:pb-14 xl:px-[6.2vw]  text-center leading-3 pb-2 lg:text-xl md:text-[12px] opacity-80 font-thin md:px-5 md:pb-4">
              Our NFC digital business cards embody this vision, offering a
              seamless and efficient way to exchange information and make
              meaningful connections. With a focus on simplicity and
              effectiveness, we're here to empower individuals and businesses to
              leave a lasting impression in the digital world. Join us in
              shaping the future of networking.
            </p>
          </div>
        </div>
      </div>
      {/* our values */}
      <div>
        <div className="px-2 max-w-[1920px] mx-auto lg:pt-12 lg:px-[0vw]  md:px-[0vw] pt-4 font-concord font-normal">
          <div>
            <p className="text-xl leading-5  md:pb-4  mb-2 xl:pt-8 xl:pb-8 xl:px-8 text-center  xl:whitespace-nowrap max-w-[300px] lg:text-4xl  lg:max-w-full lg:text-3x md:pt-4 mx-auto md:text-2xl md:max-w-[450px] md:leading-7">
              Our Values
            </p>
            <div>
              <Image
                src={aplusSmall}
                width={160}
                height={130}
                alt="aplus"
                priority={true}
                className="mx-auto mb-2 sm:hidden"
              />
            </div>
            <div className="relative overflow-hidden">
              <div className="grid grid-cols-2 gap-3 md:gap-6 xl:gap-24 pb-2">
                {ourValues.map((values, index) => (
                  <div
                    className={`shadow-md rounded-lg px-4 max-w-[220px] lg:max-w-[280px] ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                    key={values.id}
                  >
                    <p className="text-center pt-2 pb-1 md:text-xl md:pb-5 lg:text-3xl">
                      {values.title}
                    </p>
                    <p className="text-[10px] pb-4   xl:px-[0] text-center leading-3 lg:text-lg md:text-[12px] opacity-80 font-thin md:px-1 md:pb-4 lg:leading-5">
                      {values.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <Image
                  src={aplusSmall}
                  width={260}
                  height={130}
                  alt="aplus"
                  priority={true}
                  className="mx-auto mb-2 sm:hidden md:flex lg:hidden  absolute top-[20%] -right-16 overflow-hidden"
                />

                 <Image
                  src={aplusLarge}
                  width={360}
                  height={130}
                  alt="aplus"
                  priority={true}
                  className="mx-auto mb-2 sm:hidden md:flex xl:w-[365px] xl:-top-12 absolute -top-20 -right-24 xl:right-0 overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2  mx-auto lg:pt-12 lg:px-[10vw] xl:px-[6vw] md:px-[5vw] pt-6 font-concord font-normal">
        {/* our mission */}
        <p className="text-xl leading-5  mb-2 xl:pt-10 xl:pb-8 xl:px-8 text-center pt-7 md:pb-3  xl:whitespace-nowrap max-w-[300px] lg:text-4xl  lg:max-w-full lg:text-3x md:pt-4 mx-auto md:text-2xl md:max-w-[450px] md:leading-7">
          Our Mission
        </p>
        <p className="text-[10px] xl:text-2xl xl:pb-16 xl:px-[6.5vw]  text-center leading-3 pb-2 lg:text-xl md:text-[12px] opacity-80 font-thin md:px-5 md:pb-14">
          Our mission is to democratize digital identity creation by offering a
          user-friendly and affordable platform for crafting personalized online
          profile portfolios.We are dedicated to innovating and delivering
          customizable NFC digital visiting cards, empowering our clients to
          leave a lasting impression and enhance their connections in an
          increasingly digital landscape. Through our commitment to
          cost-effectiveness and accessibility, we aim to be the go-to solution
          for individuals and businesses seeking a streamlined and affordable
          online presence.
        </p>
      </div>
      {/* contact form  */}
      <div className="bg-primary-blue">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default AboutUs;
