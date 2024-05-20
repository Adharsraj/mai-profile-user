import TestComponent from "@/components/TestComponent";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <Button className="bg-primary-blue font-normal">Click me</Button>
      <Button className="bg-primary-yellow">Click me</Button>
      <TestComponent title="titleProps" subtext="subtextProps" />
    </div>
  );
};

export default Home;
