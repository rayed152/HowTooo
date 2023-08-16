import { Inter } from "next/font/google";
import Cover from "@/Components/Cover";
import Navbar1 from "@/Components/navbars/Navbar1";
import Dashboard from "@/Components/Dashboard";
import Footer from "@/Components/homelements/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cover>
        <div>
          <Dashboard />
        </div>
      </Cover>
    </>
  );
}
