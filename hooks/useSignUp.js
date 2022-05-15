import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();
  const signUp = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      dispatch({ type: "LOGIN", payload: res.user });
    } catch (err) {
      setError(err.message);
    }
  };
  return { error, signUp };
};
