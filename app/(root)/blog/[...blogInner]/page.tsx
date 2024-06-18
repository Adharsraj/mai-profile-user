"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { blogCards } from "@/constants/BlogData";

import Link from "next/link";
import { MaxWidthWrapper } from "@/components/ui/MaxWidthWrapper";
import { SignupFormDemo } from "@/components/ContactForm";
import { ArrowLeft } from "lucide-react";
import { truncateTitle } from "@/lib/textChanger";
import { useRouter } from "next/navigation";

const BlogInner: React.FC = () => {
  const router = useRouter();
  const { blogInner } = useParams();
 const slugData=blogInner?.[0].split("%20").join(' ')
const cardData = blogCards.find((cardData) => cardData.title.replace(/\?/g, '') === slugData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cardData) {
    return <div>Blog post not found</div>;
  }

  // Filter out the current card and limit to 3 cards
  const relatedCards = blogCards
    .filter((m) => m.id !== cardData.id)
    .slice(0, 3);

  const renderPassages = (cardData: any) => {
    const passages = [];
    let i = 1;
    while (cardData[`passage${i}`]) {
      passages.push(
        <p
          key={i}
          className="text-[10px] opacity-50 mt-4 md:text-xs lg:text-base xl:text-lg"
        >
          {cardData[`passage${i}`]}
        </p>
      );
      i++;
    }
    return passages;
  };
  return (
    <>
      <div className="py-8">
        <MaxWidthWrapper>
          <div
            onClick={() => router.back()}
            className="flex gap-2 text-primary-yellow  cursor-pointer w-["
          >
            <span className=" text-primary-yellow">
              <ArrowLeft />
            </span>
            <span>Back</span>
          </div>
          <h1 className="text-2xl sm:text-2xl font-medium mt-4 mb-3  lg:text-5xl">
            {cardData.title}
          </h1>
          <div className="md:w-[80%] xl:w-[72%]">
            <div className=" space-y-2 ">
              <p className="text-[10px] opacity-60 md:text-xs lg:text-sm ">
                <span className="lg:font-medium lg:opacity-100 lg:text-black lg:text-lg">
                  Originally Published:
                </span>{" "}
                {cardData.happenedDate} - {cardData.readTime}{" "}
              </p>{" "}
              <p className=" text-[10px] opacity-60 md:text-xs lg:text-sm">
                Last Updated: {cardData.lastUpdatedDate}
              </p>
            </div>
            <div className="flex items-center my-4">
              <Image
                src={cardData.author.imageUrl}
                alt={cardData.author.name}
                width={40}
                className="rounded-full lg:w-12 lg:h-12"
                height={40}
              />
              <div className="ml-3 text-xs lg:text-sm">
                <p className="  opacity-60">By {cardData.author.name}</p>
                <p className="opacity-60 text-xs">
                  {cardData.author.designation}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <Image
                src={cardData.imgSrc}
                alt={cardData.imgAlt}
                width={400}
                height={400}
                className="md:w-full md:h-[230px] md:object-cover md:object-top lg:h-[400px] xl:mt-8"
              />
            </div>

            <div className="leading-3 lg:mt-10">
              <span className="uppercase text-xs font-bold md:text-sm lg:text-base">
                {cardData.publishedDate}-
              </span>
              <span className="text-[10px] opacity-50 md:text-xs lg:text-base xl:text-lg">
                {cardData.passageMain}
              </span>
              {renderPassages(cardData)}
            </div>
            <div className="text-center mt-8">
              <p className="text-xs mb-2 lg:text-base">
                Don't forget to share the post
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Image
                  src="/images/extras/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/extras/xlogo.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/extras/fblogo.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <p className="text-xl font-medium lg:text-3xl xl:text-[40px]">
            Keep Reading ...
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-5  px-4 xl:px-0 xl:gap-16 ">
            {relatedCards.map((item, index) => (
              <div
                key={index}
                className="text-center pt-6 md:pt-3  relative z-30 bg-white "
              >
                <Link href={`/blog/${index}`}>
                  {/* Using a styled <div> as a wrapper */}
                  <div className="cursor-pointer">
                    <img
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      className="w-full h-auto "
                    />
                    <h3 className={`text-xl px-4 md:h-[60px] md:mt-6`}>
                      {truncateTitle(item.title, 10)}
                    </h3>
                    <p className=" mb-4  opacity-60 mt-6 text-[10px] leading-3 xl:text-xs ">
                      {truncateTitle(item.passageMain, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-primary-blue">
        <SignupFormDemo />
      </div>
    </>
  );
};

export default BlogInner;
