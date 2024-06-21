import { Link } from "next-view-transitions";
import React from "react";

 const page = () => {
  return (
    <div className="flex justify-center gap-5 p-5">
      <Link href="template/1">
        <div className="bg-red-600 p-5">template1</div>
      </Link>
      
      <Link href="template/2">
        <div className="bg-yellow-600 p-5">template2</div>
      </Link>
    </div>
  );
};
export default page