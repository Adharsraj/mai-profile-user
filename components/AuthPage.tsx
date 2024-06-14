"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../public/transparentLogo.svg";
import { Link } from "next-view-transitions";

const AuthPage = ({ text,linkPath }: AuthProps) => {
  return (
    <div className="relative  font-concord font-normal">
      <div className="flex justify-between relative items-center px-2 max-w-[1400px] mx-auto pt-3 md:pt-6 pb-4 lg:px-[10vw] md:px-[5vw]">
        <div className="flex items-center gap-1">
          <Image
            src={Logo}
            width={160}
            height={80}
            alt="logo"
            className="lg:w-[240px]"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <Link href={linkPath} passHref>
            {text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
