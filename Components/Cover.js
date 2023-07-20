import React from "react";
import Navbar1 from "./navbars/Navbar1";
import Home1 from "../pages/Home1";
import { useSession } from "next-auth/react";

function Cover({ children }) {
  const { data: session, status } = useSession();

  // If the session data is loading, show a loading screen
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If there is no session (user not logged in)
  if (!session) {
    return (
      <div>
        <div className="sticky-top">
          <Navbar1 />
        </div>
        <div>
          <Home1 />
        </div>
      </div>
    );
  }

  // After Login
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Cover;
