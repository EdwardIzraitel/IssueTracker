import { useState, useEffect } from "react";
import { verifyToken } from "../app/api/userAPI";

function useAuth() {
  let verified = false; //[verified, setVerified] = useState(false);

  useEffect(() => {
    try {
      const tokenStatus = verifyToken();
      if (tokenStatus) verified = true;
      return verified;
    } catch (err) {
      return verified;
    }
  });
  return verified;
}

export default useAuth;
