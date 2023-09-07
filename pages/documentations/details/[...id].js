import SimpleFooter from "@/Components/SimpleFooter";
import Navbar1 from "@/Components/navbars/Navbar1";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarDoc from "../NavbarDoc";

export default function DocDetails() {
  const router = useRouter();

  const { id } = router.query;
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/doc?id=" + id).then((response) => {
      // console.log(response.data);
      setDocs([response.data]);
    });
  }, [id]);

  const gradientStyles = {
    background: "linear-gradient(90deg, #c1bfe6 0%, #e3e3eb 46%, #85b3bd 100%)",
  };

  return (
    <div style={{ ...gradientStyles }} className="min-h-screen flex flex-col">
      <Navbar1 />
      <div className="d-flex  flex-lg-row">
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className=" pr-16">
          <NavbarDoc />
        </div>

        <div className="d-flex  flex-lg-row align-items-lg-center">
          {docs.map((doc) => (
            <div>
              <div>
                <h1 className="mt-8">Introduction to {doc.title}</h1>
                <div style={{ width: "90%" }} className="p-4">
                  {doc.introduction}
                </div>
              </div>
              <div>
                <h2 className="mt-8">Concepts</h2>
                <div className="p-4">{doc.concept}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
      <div className="mt-auto">
        <SimpleFooter />
      </div>
    </div>
  );
}
