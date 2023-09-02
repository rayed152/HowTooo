import Navbar1 from "@/Components/navbars/Navbar1";
import Link from "next/link";
import React from "react";
import styles from "@/styles/alldocs.module.css";

function alldocs() {
  return (
    <div className={`${styles.background} min-h-screen flex flex-col`}>
      <Navbar1 />

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Docs</h1>
          <p className="text-lg">
            Docs is a community-driven collection of code documentation for
            popular
            <br /> programming languages and frameworks. Interested in helping
            build it?
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Link href="./documentationC" className="no-underline text-black">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
              All Cse Documentations
            </div>
          </Link>

          <Link href="./documentationB" className="no-underline text-black">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
              All BBA Documentations
            </div>
          </Link>
          <Link href="./documentationM" className="no-underline text-black">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
              All Maths Documentations
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default alldocs;
