import { useSession } from "next-auth/react";
import React from "react";

function FirstDiv() {
  const { data: session } = useSession();
  return (
    <div>
      <div className="text-center text-white pt-4">
        <h1>Welcome, {session.user.name}</h1>
        <p>
          "The more that you read, the more things you will know. The more that
          you learn, the more places you'll go." - Dr. Seuss
        </p>
      </div>
    </div>
  );
}

export default FirstDiv;
