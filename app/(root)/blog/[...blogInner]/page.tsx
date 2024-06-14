"use client";

import { blogCards } from "@/constants/BlogData";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

type BlogCard = {
  id: string;
  imgSrc: string;
  title: string;
};

const Page: React.FC = () => {
  const params = useParams();
  const blogInner = params.blogInner as string[];
  console.log(blogCards);
  
  const cardData = blogCards.find((m) => m.id === blogInner[0]);
  console.log(blogInner[0]);
  console.log(cardData);

  if (!cardData) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <div>
        <Image
          width={300}
          height={300}
          src={cardData.imgSrc}
          alt={cardData.title}
        />
        <h1>{cardData.title}</h1>
      </div>
    </div>
  );
};

export default Page;
