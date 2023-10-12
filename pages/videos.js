import React from "react";
import Link from "next/link";
import Navbar1 from "@/Components/navbars/Navbar1";
import SimpleFooter from "@/Components/SimpleFooter";

function Videos() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar1 />
      <div className="bg-blue-100 flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl mb-4">
          Check Out Some Renowned Videos Of The Courses
        </h1>
        <div className="flex gap-4">
          <Link href="./videos/videosC">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              CSE Videos
            </div>
          </Link>
          <Link href="./videos/videosB">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              BBA Videos
            </div>
          </Link>
          <Link href="./videos/videosM">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Maths Videos
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-auto">
        <SimpleFooter />
      </div>
    </div>
  );
}

export default Videos;
