import React from "react";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";

function login() {
  return (
    <div>
      <Button onClick={() => signIn("google")}>Login</Button>
    </div>
  );
}

export default login;
