import Image from "next/image";
import React from "react";
import Logo from "../public/logF.svg";
import { AnimatedHamburgerButton } from "./ui/HamMenu";
import { CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="bg-primary-blue font-concord font-normal">
      <div className="flex justify-between items-center px-2 max-w-[1400px] mx-auto pt-3 md:pt-6 pb-4 lg:px-[10vw] md:px-[5vw]">
        <div className="flex items-center gap-1">
            <div className="lg:hidden">
          <AnimatedHamburgerButton />

            </div>

          <Image
            src={Logo}
            width={160}
            height={80}
            alt="logo"
            className="lg:w-[240px]"
          />
        </div>
        <div className="uppercase  gap-8 text-[11.5px]  bg-[#53508B] hidden lg:flex text-white p-[11px] px-6  rounded-lg ">
            <ul className="cursor-pointer">home</ul>
            <ul className="cursor-pointer">about</ul>
            <ul className="cursor-pointer">pricing</ul>
            <ul className="cursor-pointer">blog</ul>

        </div>
        <div className=" flex justify-between items-center gap-2">
          <CircleUserRound className="w-7 h-7 text-white lg:hidden" />
          <Button className="uppercase border border-primary-yellow font-normal bg-transparent text-[11.5px] hidden lg:flex h-8">Create your card</Button>

          <Button className="bg-primary-yellow uppercase w-14 md:w-16 font-normal  text-[11.5px] h-8">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
