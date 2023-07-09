import { Inter } from "next/font/google";
import Cover from "@/Components/Cover";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cover>Hello World</Cover>
    </>
  );
}
