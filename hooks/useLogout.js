import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.info(error);
    }
  };

  return { logout };
};
