"use client"
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogCards } from "@/constants/BlogData";
import { MaxWidthWrapper } from '@/components/ui/MaxWidthWrapper';

const BlogInner = () => {
    const { blogInner } = useParams();
    const slug = blogInner?.[0]; 

    const cardData = blogCards.find((cardData) => cardData.slug === slug);

    if (!cardData) {
        return (
            <div className="container mx-auto px-4 py-8">
                <MaxWidthWrapper>
                    <h1 className="text-2xl sm:text-2xl font-bold my-4">Blog post not found</h1>
                </MaxWidthWrapper>
            </div>
        );
    }

    const relatedCards = blogCards.filter((cardData) => cardData.slug !== slug).slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8">
            <MaxWidthWrapper>
                <h2 className="text-sm sm:text-base text-gray-500">Blog</h2>
                <h1 className="text-2xl sm:text-2xl font-bold my-4">{cardData.title}</h1>
                <div className="flex items-center my-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={cardData.author.imageUrl}
                            alt={cardData.author.name}
                            className="w-full h-full object-cover"
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
                    <img
                        src={cardData.imgSrc}
                        alt={cardData.imgAlt}
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
                    {relatedCards.map((relatedCard) => (
                        <div key={relatedCard.slug} className="text-center">
                            <Link href={`/blog/${relatedCard.slug}`}>
                                <div className="cursor-pointer block">
                                    <img src={relatedCard.imgSrc} alt={relatedCard.imgAlt} className="w-full h-auto rounded-lg" />
                                    <h3 className={`text-md sm:text-xs ${relatedCard.titleWidth} font-bold mx-auto mt-2`}>{relatedCard.title}</h3>
                                    <h3 className={`text-sm mt-2`}>{relatedCard.description}</h3>
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
