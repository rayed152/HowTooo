import Navbar1 from "@/Components/navbars/Navbar1";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <Navbar1 />
      <div>
        {docs.map((doc) => (
          <div>
            {doc.introduction}
            {doc.concept}
          </div>
        ))}
      </div>
    </div>
  );
}
