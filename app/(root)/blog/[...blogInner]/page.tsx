"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { blogCards } from "@/constants/BlogData";
import Link from 'next/link';
import { MaxWidthWrapper } from '@/components/ui/MaxWidthWrapper';

const BlogInner: React.FC = () => {
    const params = useParams();
    const blogInner = params.blogInner as string[];
    const cardData = blogCards.find((m) => m.id === blogInner[0]);

    if (!cardData) {
        return <div>Blog post not found</div>;
    }

    // Filter out the current card and limit to 3 cards
    const relatedCards = blogCards.filter((m) => m.id !== cardData.id).slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8">
            <MaxWidthWrapper>
                <h2 className="text-sm sm:text-base text-gray-500">Blog</h2>
                <h1 className="text-2xl sm:text-2xl font-bold my-4">{cardData.title}</h1>
                <div className="flex items-center my-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                            src={cardData.author.imageUrl}
                            alt={cardData.author.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-xs sm:text-sm text-gray-600">By {cardData.author.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{cardData.author.designation}</p>
                    </div>
                </div>
                <div className="text-gray-600 my-2">
                    <p className='text-xs sm:text-sm'>
                        <span className="font-bold text-xs sm:text-sm">Originally Published: </span> {cardData.publishedDate} - {cardData.readTime}
                    </p>
                    <p className='text-xs sm:text-sm'>Last Updated: {cardData.lastUpdatedDate}</p>
                </div>
                <div className="mb-4">
                    <Image
                        src={cardData.imgSrc}
                        alt={cardData.imgAlt}
                        width={1200}
                        height={675}
                        className="w-full lg:w-[1200px] h-auto rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <p className="text-gray-700 text-sm sm:text-sm leading-relaxed mb-4">
                        <span className='font-bold text-[15px]'>{cardData.newsPlace}, {cardData.happenedDate} - </span>
                        {cardData.description}
                    </p>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm sm:text-lg font-semibold mb-4">Don't forget to share the post</p>
                    <div className="flex justify-center gap-4 mb-8">
                        <img
                            src="/images/extras/linkedin.svg"
                            alt="LinkedIn"
                            className="w-8 h-8"
                        />
                        <img
                            src="/images/extras/xlogo.svg"
                            alt="Twitter"
                            className="w-8 h-8"
                        />
                        <img
                            src="/images/extras/fblogo.svg"
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedCards.map((cardData) => (
                        <div key={cardData.id} className="text-center">
                            <Link href={`/blog/${cardData.id}`}>
                                <div className="cursor-pointer block">
                                    <img src={cardData.imgSrc} alt={cardData.imgAlt} className="w-full h-auto rounded-lg" />
                                    <h3 className={`text-md sm:text-xs ${cardData.titleWidth} font-bold mx-auto mt-2`}>{cardData.title}</h3>
                                    <h3 className={`text-sm mt-2`}>{cardData.description}</h3>
                                    
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default BlogInner;
