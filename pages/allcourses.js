import Navbar1 from "@/Components/navbars/Navbar1";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/alldocs.module.css";

function allcourses() {
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
            Courses
          </h1>
          <p className="text-lg">
            Welcome to our Courses Section, where knowledge meets inspiration
            and learning becomes a captivating journey.
            <br /> Here, we invite you to explore a diverse array of courses
            meticulously designed to elevate your skills, broaden your horizons,
            and ignite your passion for lifelong learning.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Link href="#" className="no-underline text-black">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
              CSE Courses
            </div>
          </Link>

          <Link href="#" className="no-underline text-black">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
              BBA Courses
            </div>
          </Link>
          <Link href="./allmatcourses" className="no-underline text-black">
            <div className="border-2 border-black p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
              Maths Courses
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default allcourses;
