"use client";
import React, { useState } from "react";
import Image from "next/image";
import transparentLogo from "../public/transparentLogo.svg";
import xLogo from "../public/Images/extras/xlogo.svg";
import fbLogo from "../public/Images/extras/fblogo.svg";
import twitter from "../public/Images/extras/twitter.svg";
import { MaxWidthWrapper } from "@/components/ui/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const Login = () => {
    const [formData, setFormData] = useState({

        email: "",
        password: "",
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <MaxWidthWrapper className="">
           

            <div className="mt-6 lg:flex lg:justify-between lg:items-start">
                <div className="lg:w-1/2 lg:pr-8">
                    <div className="flex justify-center lg:hidden mb-6">
                        <Image
                            src="/Images/extras/login.svg"
                            alt="Your Image"
                            width={200}
                            height={200}
                        />
                    </div>

                    <h1 className="text-2xl font-bold mb-3 text-center lg:text-left">Login</h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                        <div className="w-full">
                            <div className="mb-4 hidden lg:flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                                <Button className="flex items-center justify-center bg-blue-300 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 mr-2">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M21.35 11.1h-9.08v2.92h5.23c-.44 2.2-2.45 3.83-4.73 3.83-2.76 0-5-2.24-5-5s2.24-5 5-5c1.3 0 2.48.49 3.39 1.3l2.28-2.28C17.24 4.97 15.24 4 13 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c4.18 0 7.56-3.06 7.94-7h-2.59v-2.9z"
                                        />
                                    </svg>
                                    Continue with Google
                                </Button>
                                <div className="flex justify-center md:justify-start">
                                    <Button className="flex items-center justify-center bg-white hover:bg-white border border-gray-300 rounded-full w-8 h-8 p-0 gap-2">
                                        <Image src={xLogo} alt="Custom Logo" width={34} height={34} className="rounded-full" />
                                    </Button>
                                    <Button className="flex items-center justify-center bg-white hover:bg-white border border-gray-300 rounded-full w-8 h-8 p-0 gap-4">
                                        <Image src={fbLogo} alt="Facebook Logo" width={34} height={34} className="rounded-full" />
                                    </Button>
                                </div>
                            </div>
                            <div className="text-gray-500 hidden lg:inline lg:ml-[130px]">Or</div>
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="mt-1 p-2 border-b border-gray-300 outline-none w-full md:w-48 placeholder-black"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Password"
                                className="mt-1 p-2 border-b border-gray-300 outline-none w-full md:w-48 placeholder-black"
                            />
                        </div>
                        <div className="text-gray-500 text-xs lg:mr-[230px] mt-[-25px] mb-4 text-end lg:text-center">
                            <a href="#" className="text-blue-600">Forgot Password?</a>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <button type="submit" className="bg-primary-blue text-white w-full lg:w-auto lg:px-8 h-[50px] rounded-md md:hover:bg-blue-600 ">
                                Login
                            </button>
                        </div>
                        <div className="text-gray-500 text-center mt-1 lg:hidden">or</div>
                        <Button className="bg-blue-600 text-white border border-gray-300 w-full h-[50px] rounded-md hover:bg-gray-100 lg:hidden">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M21.35 11.1h-9.08v2.92h5.23c-.44 2.2-2.45 3.83-4.73 3.83-2.76 0-5-2.24-5-5s2.24-5 5-5c1.3 0 2.48.49 3.39 1.3l2.28-2.28C17.24 4.97 15.24 4 13 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c4.18 0 7.56-3.06 7.94-7h-2.59v-2.9z"
                                />
                            </svg>
                            Continue with Google
                        </Button>
                        <div className="flex justify-center md:justify-start mt-4 lg:hidden">
                            <Button className="flex items-center justify-center bg-white hover:bg-white-600 rounded-full w-8 h-8 p-0 gap-2">
                                <Image src={twitter} alt="Twitter Logo" width={34} height={34} className="rounded-full" />
                            </Button>
                            <Button className="flex items-center justify-center bg-white hover:bg-white border rounded-full w-8 h-8 p-0 gap-4">
                                <Image src={fbLogo} alt="Facebook Logo" width={34} height={34} className="rounded-full" />
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:flex lg:items-start lg:justify-end lg:w-1/2 lg:mt-[60px]">
                    <Image
                        src="/Images/extras/login.svg"
                        alt="Your Image"
                        width={200}
                        height={200}
                        className="lg:w-full lg:h-auto"
                    />
                </div>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:mt-8">
                <div className="text-gray-600 text-sm text-center lg:text-sm lg:mt-[120px]">
                    By signin, you agree to our Terms of use and acknowledge you have read our privacy policy.
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Login;

