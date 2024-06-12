import Image from "next/image";
import React from "react";
import tLogo from "../public/transparentLogo.svg";
import mailIcon from "../public/Images/footer/mail.svg";
import phoneIcon from "../public/Images/footer/phone-call.svg";
import { rings } from "@/constants/SvgComponents";

const Footer = () => {
  return (
    <div className="relative">

    <div className="pt-4 px-4 md:px-[10vw] overflow-auto  max-w-[1400px] mx-auto lg:pt-28 pb-10 font-concord  ">
      <div className="lg:flex">
        <div className="">
          <Image
            className="lg:w-52"
            src={tLogo}
            width={180}
            height={100}
            alt="logo"
          />
          <div>
            <p className="text-[#797979] text-[10px] lg:text-[16px]  lg:leading-[28px] pt-3 lg:pt-5 max-w-sm lg:max-w-[265px] md:leading-[18px]">
              With our affordable solutions, you can make a lasting impression
              without breaking the bank, ensuring that your professional image
              remains top-notch in today's competitive landscape
            </p>
          </div>
          <div className="flex lg:flex-col lg:items-start items-center gap-4 pt-6 md:pt-8 lg:pt-12">
            <div className="flex items-center justify-center h-full  gap-2 md:gap-4">
              <Image
                className="md:w-6"
                src={mailIcon}
                width={18}
                height={10}
                alt="email"
              />
              <div className="text-[#797979] lg:text-[16px]  text-[10px] lg:gap-1 flex flex-col md:gap-3 ">
                <span>sassup@gmail.com</span>
                <span>mail@saasup.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-full  gap-2 md:gap-4">
              <div className="h-full ">
                <Image
                  className="md:w-6"
                  src={phoneIcon}
                  width={18}
                  height={100}
                  alt="phone"
                />
              </div>
              <div className="text-[#797979] lg:text-[16px]  text-[10px] flex flex-col md:gap-3 lg:gap-1 ">
                <span>+987 6541 3654</span>
                <span>+001 6547 6589</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-16 md:gap-40 lg:gap-5 pt-5 md:pt-16 lg:pt-0 align-top lg:ml-16">
            <div>
              <span className="border-b pb-2 md:text-lg lg:text-2xl lg:pb-6 border-[#E3E3E3]">
                Utility Pages
              </span>
              <div className="text-[#797979] text-[10px] lg:text-[16px]   pt-4 lg:pt-12">
                <ul className="space-y-2 lg:space-y-5">
                  <li>Password Protected</li>
                  <li>404 Not Found</li>
                  <li>Style Guide</li>
                  <li>Licenses</li>
                  <li>Changelog</li>
                </ul>
              </div>
            </div>
            <div className="lg:ml-5">
              <span className="border-b pb-2 md:text-lg lg:pb-6 lg:text-2xl border-[#E3E3E3]">
                Pages
              </span>
              <div className="text-[#797979] text-[10px]  lg:pt-12 lg:text-[16px] pt-4">
                <ul className="space-y-2 lg:space-y-5">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Pricing</li>
                  <li>Features</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="absolute xl:top-[-115%] md:top-[-60%] lg:top-[-65%] right-0 max-w-[400px]  ">
          <Image
            className="hidden md:flex w-[27vw] "
            src={rings.cutRing}
            width={80}
            height={100}
            alt="phone"
          />
        </div>{" "}
      </div>
    </div>
    </div>

  );
};

export default Footer;
