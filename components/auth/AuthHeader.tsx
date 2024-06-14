"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../public/transparentLogo.svg";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const AuthHeader = () => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  const linkHref = pathname === "/sign-in" ? "/sign-up" : "/sign-in";
  const linkText = isSignIn ? (
    <>
      Don't have an account?{" "}
      <span className="text-primary-blue">Create Account</span>
    </>
  ) : (
    <>
      Already have an account? <span className="text-primary-blue">Login</span>
    </>
  );
  return (
    <div className="relative font-concord font-normal">
      <div className="flex justify-between relative items-center px-2 max-w-[1400px] mx-auto pt-3 md:pt-6 pb-4 lg:px-[10vw] md:px-[5vw]">
        <div className="grid grid-cols-2 items-center w-full gap-1">
          <Image
            src={Logo}
            width={160}
            height={80}
            alt="logo"
            priority={true}
            className="lg:w-[240px] "
          />
          <Link href={linkHref} passHref>
            <p className="text-[10px] lg:text-sm text-end  flex-1 ">
            {linkText}

            </p>
          </Link>
        </div>

          
        </div>
    </div>
  );
};

export default AuthHeader;
