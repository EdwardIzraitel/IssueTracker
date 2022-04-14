import { useState, useEffect } from "react";
import { verifyToken } from "../app/api/userAPI";

async function useAuth() {
  let verified = false; //[verified, setVerified] = useState(false);

  const isVerified = async () => {
    try {
      const c = await verifyToken();
      if (c.data) verified = true;
    } catch (err) {
      console.log(err);
    }
  };
  isVerified();
  return verified;
}

export default useAuth;
