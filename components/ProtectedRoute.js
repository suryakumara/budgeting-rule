import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import useAuthContext from "../hooks/useAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
