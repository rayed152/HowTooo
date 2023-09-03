import Navbar1 from "@/Components/navbars/Navbar1";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/alldocs.module.css";

function alldocs() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);
  return (
    <div className={`${styles.background} min-h-screen flex flex-col`}>
      <Navbar1 />

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center">
          <h1
            className={`text-4xl font-bold mb-4 ${
              animate ? styles["underline-animation"] : ""
            }`}
          >
            Docs
          </h1>
          <p className="text-lg">
            Documentation is a process of creating and maintaining written or
            visual materials that provide <br />
            information, instructions, and details about a particular subject,
            product, process, system, or concept.
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
