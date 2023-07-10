// import React from "react";
// import { Button } from "react-bootstrap";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// function login() {
//   const router = useRouter();
//   const { data: session } = useSession();

//   if (session) {
//     router.push("/");
//     return null;
//   }

//   const handleLogin = async () => {
//     await signIn("google", { callbackUrl: "/" });
//   };
//   return (
//     <div>
//       <Button onClick={handleLogin}>Login</Button>
//     </div>
//   );
// }

// export default login;
