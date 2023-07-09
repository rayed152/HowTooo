import { Inter } from "next/font/google";
import Cover from "@/Components/Cover";
import { Button } from "react-bootstrap";
import Navbar1 from "@/Components/Navbar1";
import { signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cover>
        <div>
          <Navbar1 />
          <div>This is the home page after signing in</div>
          <Button onClick={() => signOut()}>signOut</Button>
        </div>
      </Cover>
    </>
  );
}
