import React from 'react';
import InnerBlog from '@/components/InnerBlog';
import { SignupFormDemo } from '@/components/ContactForm';

const BlogInner = () => {
  return (
    <div>
      <InnerBlog />
      <div className="bg-primary-blue">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default BlogInner;

