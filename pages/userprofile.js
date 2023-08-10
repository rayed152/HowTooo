// pages/profile.js

import Cover from "@/Components/Cover";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import Navbar1 from "@/Components/navbars/Navbar1";
import Link from "next/link";
import axios from "axios";

function userprofile() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (session && session.user && session.user.email) {
      // Fetch the profile data based on the user's email
      axios
        .get(`/api/profiles?email=${encodeURIComponent(session.user.email)}`)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch profile data:", error);
          setProfile(null);
        });
    }
  }, [session]);

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
              <Link href="/EditProfile">Edit</Link>
              <h5 className="mt-4">Hello, </h5>
              {profile && (
                <h5>
                  {profile.firstName} {profile.lastName}{" "}
                </h5>
              )}
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
            {profile && (
              <div className={`text-gray-500 ${styles.subContainer2}`}>
                <span style={{ fontStyle: "bold", color: "black" }}>
                  Phone Number:
                </span>{" "}
                {profile.phone}
              </div>
            )}
            {profile && (
              <div className={`text-gray-500 ${styles.subContainer2}`}>
                <span style={{ fontStyle: "bold", color: "black" }}>Age:</span>{" "}
                {profile.age}
              </div>
            )}
            {profile && (
              <div className={`text-gray-500 ${styles.subContainer2}`}>
                <span style={{ fontStyle: "bold", color: "black" }}>
                  Address
                </span>{" "}
                {profile.address}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default userprofile;
