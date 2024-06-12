"use client";
import React from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { rings } from "@/constants/SvgComponents";
import Image from "next/image";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="relative">

    <div className="max-w-[54rem] w-full mx-auto  rounded-none md:rounded-2xl p-4 md:p-8  bg-primary-blue  dark:bg-black z-50">
      <h2 className="font-bold text-xl md:text-2xl lg:text-4xl xl:pt-7 md:pb-6 text-center text-white">
        Get in touch with us{" "}
      </h2>
      <form className="my-2 relative z-40" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4 sm:hidden">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="full name" type="text" />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <div className="md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4 md:mb-0">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 md:mb-0">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Phone number" type="number" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4 z-30">
          <Label htmlFor="job">Job Title</Label>
          <Input id="job" placeholder="Job Title" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="url">Website Url</Label>
          <Input id="url" placeholder="Website Url" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="url">Number of employees at the company</Label>
          <Input  id="url" placeholder="Number of employees" type="text" />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br md:max-w-[130px] flex justify-center items-center mx-auto relative group/btn bg-primary-yellow w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Get Started &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
    <div className="">
        <div className="absolute -top-[40%] left-0 max-w-[400px]  ">
          <Image
            className="hidden md:flex w-[15vw] "
            src={rings.rightCut}
            width={80}
            height={100}
            alt="phone"
          />
        </div>{" "}
      </div>
    </div>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
