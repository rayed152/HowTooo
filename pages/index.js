import { Inter } from "next/font/google";
import Cover from "@/Components/Cover";
import Navbar1 from "@/Components/navbars/Navbar1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cover>
        <div>
          <Navbar1 />
          <div>This is the home page after signing in</div>
        </div>
      </Cover>
    </>
  );
}
