import React from "react";

import Image from "next/image";
import xLogo from "../../../public/Images/extras/xlogo.svg";
import fbLogo from "../../../public/Images/extras/fblogo.svg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import google from "../../../public/Images/auth/google.svg";
const SignIn = () => {
  return (
    <div
      className="font-concord font-normal
    px-2 max-w-[1400px] 3xl:max-w-[1920px]   mx-auto lg:px-[10vw] md:px-[5vw] overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-5 relative lg:mt-3 ">
        <div className="lg:order-last lg:col-span-3">
          <div className="flex justify-center items-center pt-2  ">
            <Image
              src="/Images/extras/login-cropped.svg"
              alt="rightImage"
              width={200}
              height={200}
              className="md:w-[450px] lg:w-[53vw]  xl:max-w-[800px] xl:max-h-[500px]  lg:absolute lg:top-[14%] xl:top-[5%]  lg:right-[-10%]"
            />
          </div>
        </div>
        <div className=" lg:col-span-2 ">
          <div>
            <p className="text-xl  font-medium lg:text-[40px]  md:text-4xl md:py-10  pt-2 text-center lg:text-left">
              Log In
            </p>
            <div className="hidden lg:flex w-full ">
              <div className="w-full">
                <div className="bg-[#2D8BDF] hidden lg:flex lg:flex-1 w-full gap-5 p-2 lg:p-[13px] rounded-lg lg:gap-0">
                  <Image
                    width={20}
                    height={20}
                    alt="googleicon"
                    className="lg:w-7"
                    src={google}
                  />
                  <button className="text-sm text-white lg:text-center lg:w-full font-normal lg:text-base">
                    Continue with Google
                  </button>
                </div>
              </div>

              <div className="flex justify-around   w-[40%]">
                <Image
                  src={xLogo}
                  alt="Custom Logo"
                  width={20}
                  height={20}
                  className="rounded-full lg:w-8"
                />
                <Image
                  src={fbLogo}
                  alt="Facebook Logo"
                  width={20}
                  height={20}
                  className="rounded-full lg:w-8"
                />
              </div>
            </div>
            <p className="text-center text-lg p-3 my-6 lg:block hidden ">or</p>
          </div>
          <div className="space-y-8">
            <Input
              type="text"
              name="firstName"
              required
              placeholder="Email"
              className="bg-white  border placeholder-black border-b border-t-0 border-x-0 shadow-none"
            />
            <Input
              type="text"
              name="firstName"
              required
              placeholder="password"
              className="bg-white placeholder-black border border-b border-t-0 border-x-0 shadow-none"
            />
          </div>
          <Button className="w-full bg-primary-blue mt-3 lg:mt-5 lg:w-2/5 lg:mb-5 xl:mb-24">
            Create Account
          </Button>
          <p className="text-center text-xs p-2 lg:hidden">or</p>
          <div className="bg-[#2D8BDF] lg:hidden flex justify-center items-center gap-5 p-2 rounded-lg">
            <Image width={20} height={20} alt="googleicon" src={google} />
            <button className="text-sm">Continue with Google</button>
          </div>
          <div className="flex justify-center gap-3 mt-3 pb-4 lg:hidden">
            <Image
              src={xLogo}
              alt="Custom Logo"
              width={20}
              height={20}
              className="rounded-full"
            />
            <Image
              src={fbLogo}
              alt="Facebook Logo"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
