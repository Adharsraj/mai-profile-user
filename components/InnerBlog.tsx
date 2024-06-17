"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MaxWidthWrapper } from '@/components/ui/MaxWidthWrapper'; 

interface AuthorInfo {
    name: string;
    designation: string;
    imageUrl: string;
}

const InnerBlog: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>('');
    const [lastUpdated, setLastUpdated] = useState<string>('');

    const author: AuthorInfo = {
        name: 'Anna Philip',
        designation: 'Senior Writer',
        imageUrl: '/path/to/author-image.jpg',
    };

    const place = 'MELBOURNE';

    const gridItems = [
        {
            imgSrc: "/images/blog/grid1.svg",
            imgAlt: "Grid 1",
            title: "Mai Profile News Letter 2024",
            description: "Over the past few months we have been hard at work adding new features to mai profile.",
            titleWidth: "w-[180px]"
        },
        {
            imgSrc: "/images/blog/grid2.svg",
            imgAlt: "Grid 2",
            title: "What is the correct approach to Business Networking?",
            description: "Networking isn't just for you. It's also for your business. Learn how to master business Networking.",
            titleWidth: "w-[300px]"
        },
        {
            imgSrc: "/images/blog/grid3.svg",
            imgAlt: "Grid 3",
            title: "How to Create a Virtual Background",
            description: "Learn how to create your own custom, professional virtual background for free with Mai profile.",
            titleWidth: "w-[220px]"
        },
    ];

    useEffect(() => {
        const now = new Date();
        const formattedCurrentDate = now.toLocaleDateString('en-GB', {
            month: 'long',
            day: 'numeric',
        });
        const currentDateString = `: ${formattedCurrentDate}`;
        setCurrentDate(currentDateString);
        const formattedLastUpdated = now.toLocaleDateString('en-GB', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

        const lastUpdatedString = `last updated: ${formattedLastUpdated}`;

        setLastUpdated(lastUpdatedString);

    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <MaxWidthWrapper>
                <h2 className="text-sm sm:text-base text-gray-500">Blog</h2>
                <h1 className="text-2xl sm:text-2xl font-bold my-4">How to Customize Digital Business Cards?</h1>
                <div className="flex items-center my-4">
                    <Image
                        src="/images/blog/anna.jpeg"
                        alt={author.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />

                    <div className="ml-3">
                        <p className="text-xs sm:text-sm text-gray-600">By {author.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{author.designation}</p>
                    </div>
                </div>
                <div className="text-gray-600 my-2">
                    <p className='text-xs sm:text-sm'><span className="font-bold text-xs sm:text-sm">Orientally Published:</span> {currentDate} - 2 min read</p>
                    <p className='text-xs sm:text-sm'>{lastUpdated}</p>
                </div>

                <div className="mb-4">
                    <img
                        src="/images/blog/blogframe.svg"
                        alt="Image Description"
                        className="w-full lg:w-[1200px] h-auto rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <p className="text-gray-700 text-md sm:text-sm leading-relaxed font-bold mb-4">
                    </p>
                    <p className="text-gray-700 text-sm sm:text-md leading-relaxed mb-4">
                        <span className='font-bold'>{place}{currentDate}</span> - This is a detailed report on the blog post. It includes various
                        insights and data that provide a comprehensive understanding of the
                        topic discussed in the blog. The report covers multiple aspects and
                        presents information in a clear and concise manner, ensuring that
                        readers can easily grasp the key points and takeaways.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-md leading-relaxed mb-4">
                        The first insight delves into the background of the topic, providing
                        historical context and foundational knowledge. This sets the stage
                        for a deeper exploration of the subject matter, making it easier for
                        readers to follow along and understand the significance of the
                        information presented.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-md leading-relaxed mb-4">
                        The second insight focuses on current trends and developments. It
                        highlights recent advancements and changes in the field, offering
                        readers a snapshot of the current landscape. This section is crucial
                        for staying updated with the latest information and understanding how
                        it impacts the broader context.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-md leading-relaxed mb-4">
                        Finally, the third insight offers predictions and future
                        implications. Based on the data and trends discussed, this section
                        provides an outlook on what to expect in the future. It helps readers
                        to anticipate changes and prepare for potential developments in the
                        field.
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
                    {gridItems.map((item, index) => (
                        <div key={index} className="text-center">
                            <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-auto rounded-lg" />
                            <h3 className={`text-sm sm:text-md ${item.titleWidth} font-bold mx-auto mt-2`}>{item.title}</h3>
                            <p className="text-black-600 text-xs sm:text-sm mb-4 mt-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default InnerBlog;
