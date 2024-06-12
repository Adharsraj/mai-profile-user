import Hero from "@/components/Hero";
import Blogpage from "@/components/Blogpage";
import React from "react";
import { SignupFormDemo } from "@/components/ContactForm";

const Blog = () => {
  const heroProps = {
    title: {
           
      line1: "Exploring the",
      line2: "Power of NFC",
      line3:"Cards"
    },
    desc: "Discover how NFC business cards are revolutionizing networking in our latest blog post.",
    image: {
        src: "/Images/hero/blg.svg",
        alt: "heroimage",
    },
  };
  return (
    <div>
      <Hero {...heroProps} />
      <Blogpage/>
      <div className="bg-primary-blue">
        <SignupFormDemo />
      </div>    </div>
  );
};

export default Blog;