"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type PricingSwitchProps = {
  onSwitch: (value: string) => void;
};

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
};

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
);

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
}: PricingCardProps) => (
  <Card
    className={cn(
      `w-72 lg:w-[345px]  rounded-lg flex flex-col justify-between relative py-1 ${popular&&"border-primary-yellow"} mx-auto sm:mx-0`,
      {
        " text-white h-full lg:mt-[-28px] relative bg-gradient-to-br from-primary-blue via-primary-blue to-primary-yellow bg-[length:280%_100%]  transition-colors":
        exclusive,
      }
    )}
  >
    <div>
      <CardHeader className="pb-8 pt-4 ">
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className="flex justify-between">
            <CardTitle className=" text-xl text-center">{title}</CardTitle>
            <div
              className={cn(
                "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                {
                  "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ":
                    popular,
                }
              )}
            >
              Save ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className=" md:text-2xl text-xl pt-4 text-center md:text-left">{title}</CardTitle>
        )}
        <CardDescription
          className={cn("md:pt-1.5 md:h-12  text-black text-sm  md:text-lg text-center md:text-left  leading-4", {
            "text-white": exclusive,
          })}
        >
          {description}
        </CardDescription>

        <div className="flex gap-0.5">
          <h3 className="text-4xl font-bold">
            {monthlyPrice ?
              "₹" + monthlyPrice :"₹" + monthlyPrice
            }
          </h3>
          <span className="flex flex-col justify-end text-sm mb-1">
            { monthlyPrice ? "/month" : "/month"}
          </span>
        </div>
      </CardHeader>
      {exclusive && (
        <div className="absolute -top-5 rounded-lg  bg-primary-yellow right-[15%] left-[15%]  text-center p-1.5 border border-black">
          Most Popular
        </div>
      )}
      <CardContent className="font-bold">
        Includes:
      </CardContent>
      <CardContent className="flex flex-col gap-2 md:pb-8">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
  </Card>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2 pb-3">
    <CheckCircle2 size={22} className="my-auto" />
    <p className=" flex-1  md:text-lg leading-5  text-sm  ">{text}</p>
  </div>
);

export default function PricingDetails() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Basic Free",
      yearlyPrice: 100,
      monthlyPrice: 0,

      description: "Get started with digital business cards.",
      features: [
        "Create unique business cards",
        "Add your photo,contact details,logos and links",
        "Limited card sharing",
        "Limited to 10 profile views",
        "Create email signatures and virtual background",
      ],
      actionLabel: "Get Started",
      popular: true,

    },
    {
      title: "Basic Premium",
      monthlyPrice: 899,

      price: "Custom",
      description: "Get started with digital business cards.",
      features: [
        "Create Free NFC visiting card",
        "Add your photo,contact details,logos and links",
        "Unlimited card shares for 2 years",
        "Ad.Free Account",
        "Create email signatures and virtual background",
      ],
      actionLabel: "Contact Sales",
      exclusive: true,
    },
    {
      title: "Professional Premium",
      monthlyPrice: 1300,
      yearlyPrice: 250,
      description: "Get started with digital business cards.",
      features: [
        "Create Free NFC visiting card",
        "Add your photo,contact details,logos and links",
        "Unlimited card shares for 2 years",
        "Ad.Free Account",
        "Create email signatures and virtual background",
      ],
      actionLabel: "Get Started",
      popular: true,
    },
  ];
  return (
    <div className="py-8">
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 lg:gap-5 mt-4">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />;
        })}
      </section>
    </div>
  );
}
