import React from "react";

const TestComponent = ({ title, subtext }: TestRunProps) => {
  return (
    <div>
      <div className="bg-primary-blue text-white">{title}</div>
      <div className="bg-primary-yellow">{subtext}</div>
    </div>
  );
};

export default TestComponent;
