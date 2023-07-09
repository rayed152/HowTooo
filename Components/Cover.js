import React from "react";
import Navbar1 from "./Navbar1";
import Home1 from "../pages/Home1";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";

function Cover({ children }) {
  {
    /* Before Login */
  }
  const { data: session } = useSession();
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

  {
    /* After Login */
  }
  return (
    <div>
      {/* <div>{children}</div> */}
      <div>
        You are logged in<Button onClick={() => signOut()}>signOut</Button>
      </div>
    </div>
  );
}

export default Cover;
