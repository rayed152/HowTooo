import Cover from "@/Components/Cover";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import styles from "../styles/profile.module.css";
import { Button } from "react-bootstrap";
import Navbar1 from "@/Components/navbars/Navbar1";
import Link from "next/link";

function profile() {
  const { data: session } = useSession();
  if (!session || !session.user) {
    return (
      <Cover>
        <div>
          <h1>Some Problem Here</h1>
        </div>
      </Cover>
    );
  }
  return (
    <div>
      <Navbar1 />
      <div className={`${styles.maindiv}`}>
        <div className={`${styles.subdiv}`}>
          <div className={`${styles.imageContainer}`}>
            <Image
              src={session.user.image}
              width={100}
              height={150}
              className={`${styles.imageDiv}`}
            />
          </div>
          <div className={`${styles.detailContainer}`}>
            <div className={`${styles.subContainer1}`}>
              <Link href="#Editprofile" className={`${styles.editButton}`}>
                Edit
              </Link>
              <h5 className="mt-4">Hello,</h5>
            </div>
            <div className={`text-gray-500 ${styles.subContainer2}`}>
              <span style={{ fontStyle: "bold", color: "black" }}>
                Username:
              </span>{" "}
              {session.user.name}{" "}
            </div>
            <div className={`text-gray-500 ${styles.subContainer2}`}>
              <span style={{ fontStyle: "bold", color: "black" }}>Email:</span>{" "}
              {session.user.email}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
