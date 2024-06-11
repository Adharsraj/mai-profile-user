import { SignupFormDemo } from "@/components/ContactForm";
import Hero from "@/components/Hero";
import PricingDetails from "@/components/Pricing";
import { ShinyButton } from "@/components/Shiney";
import React from "react";
type Item = {
    title: string;
    free?: boolean;
    premium?: boolean;
    professional?: boolean;
  };
type ColumnConfig = {
    label: string;
    key: keyof Item;
    color: string;
  };
const Pricing = () => {
    const columns: ColumnConfig[] = [
        { label: 'Basic Free', key: 'free', color: 'green' },
        { label: 'Basic Premium', key: 'premium', color: 'green' },
        { label: 'Professional Premium', key: 'professional', color: 'green' }
      ];
    
  const heroProps = {
    title: {
      line1: "Pricing Plans",
      line2: "For Our Cards",
    },
    desc: "Choose the package that suits your needs and leave a lasting impression with every tap.",
    image: {
      src: "/Images/hero/pricing.svg",
      alt: "heroimage",
    },
  };

  const m = [
    {
      title: "Unlimited card sharing",
      free: true,
      premium: true,
      professional: true,
    },
    {
      title: "Customer support",
      free: true,
      premium: true,
      professional: true,
    },
    {
      title: "Analytics",
      free: true,
      premium: true,
      professional: true,
    },
    {
      title: "Custom colors",
      free: true,
      premium: true,
      professional: true,
    },
    {
      title: "Free NFC visiting cards",
      free: false,
      premium: true,
      professional: true,
    },
    {
      title: "Additional card designs",
      free: false,
      premium: true,
      professional: true,
    },
    {
      title: "Customizable virtual backgrounds",
      free: false,
      premium: true,
      professional: true,
    },
    {
      title: "Embedded videos",
      free: false,
      premium: true,
      professional: true,
    },
    {
      title: "Ad- Free account",
      free: false,
      premium: true,
      professional: true,
    },
  ];
  return (
    <div>
      <Hero {...heroProps} />
      {/* our journey (reusable) */}
      <div className="px-2  mx-auto lg:pt-12 lg:px-[10vw] xl:px-[6vw] md:px-[5vw] pt-6 font-concord font-normal">
        <div className=" max-w-[1920px] mx-auto ">
          <div className=" max-w-[1400px] mx-auto">
            <p className="text-xl leading-5   md:pb-3 xl:px-8 text-center pt-2 pb-2 xl:whitespace-nowrap max-w-[300px] lg:text-4xl  lg:max-w-full lg:text-3x  mx-auto md:text-2xl md:max-w-[350px] md:leading-7">
              Pricing Plans for everyone{" "}
            </p>
            <p className="text-[10px] xl:text-2xl xl:pb-3 xl:px-[6.2vw]  text-center leading-3 pb-2 lg:text-xl md:text-[12px] opacity-80 font-thin md:px-5 ">
              Choose the plan that is right for you or your organization.
            </p>
          </div>
        </div>
      </div>
      <PricingDetails />
 {/* pricing plans (reusable) */}
 <div className="px-2  mx-auto lg:pt-12 lg:px-[10vw] xl:px-[6vw] md:px-[5vw] pt-6 font-concord font-normal">
        <div className=" max-w-[1920px] mx-auto ">
          <div className=" max-w-[1400px] mx-auto">
            <p className="text-xl leading-5   md:pb-3 xl:px-8 text-center pt-2 pb-2 xl:whitespace-nowrap max-w-[300px] lg:text-4xl  lg:max-w-full lg:text-3x  mx-auto md:text-2xl md:max-w-[350px] md:leading-7">
              Compare our plans
            </p>
          </div>
        </div>
      </div>
      <div className="px-2 mx-auto lg:px-[10vw] xl:px-[6vw] md:px-[5vw] font-concord font-normal">
      <div className="px-2 mx-auto lg:px-[10vw] xl:px-[6vw] md:px-[5vw] font-concord font-normal">
        <div className="overflow-y-scroll">
      <section className="text-gray-700 body-font min-w-[650px] ">
        <div className="container px-5 py-14 mx-auto flex flex-wrap">
          <div className="w-1/4  ">
            <div className="px-2 text-center flex flex-col items-center justify-center">
              <h3 className="tracking-widest invisible">Basic Free</h3>
            </div>
            {m.map((item,index) => (
              <p key={index} className="text-gray-600 whitespace-nowrap h-16 border-b flex items-center text-sm xl:text-lg justify-start">
                {item.title}
              </p>
            ))}
          </div>
          <div className="flex w-3/4 flex-wrap rounded-lg">
            {columns.map((column, index) => (
              <div
                key={index}
                className="w-1/3 lg:mt-px  mb-10 lg:mb-0  border-gray-300 lg:border-none rounded-lg lg:rounded-none"
              >
                <div className="px-2 text-center flex flex-col items-center justify-center">
                  <p className="tracking-widest whitespace-nowrap text-sm mt-1 xl:text-base xl:mt-[-1px] font-bold ">{column.label}</p>
                </div>
                {m.map((item,index) => (
                  <p
                    key={index}
                    className={`text-center h-16 border-b flex items-center justify-center ${item[column.key] ? `text-${column.color}-600` : ''}`}
                  >
                    {item[column?.key] ? (
                      <span className={`w-5 h-5 inline-flex items-center justify-center bg-${column.color}-500 text-white rounded-full flex-shrink-0`}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                    ) : (
                    ""
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

        </div>
    </div>
</div>

      <div className="bg-primary-blue">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default Pricing;
