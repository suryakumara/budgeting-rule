import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useSignUp } from "../../hooks/useSignUp";

const Input = styled("input")`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border-width: 1px;
  border-color: #646464;
  border-radius: 4px;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consfirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signUp, error } = useSignUp();
  const router = useRouter();

  const handleRegister = () => {
    if (!errorMessage) {
      signUp(email, password);
      router.push("/");
    }
  };
  
  const handleConfirm = () => {
    if (password !== consfirmPassword) {
      setErrorMessage("Password not match");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <>
      <div className="flex justify-center mt-[200px]">
        <div className="border shadow-lg rounded-xl  w-[700px]">
          <div className="grid grid-cols-2 gap-7 py-8">
            <div className="py-2 pl-10">
              <div className="py-2">Email</div>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} />
              <div className="py-2">Password</div>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
              <div className="py-2">Confirm Password</div>
              <Input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleConfirm}
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              <div className="mt-5">
                <button
                  className=" w-28 bg-gray-700 transition ease-in-out delay-150  hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
            <div className="py-14">
              <h1 className="text-5xl text-center">Budgeting Rule</h1>
              <h1 className="text-5xl text-center">App</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
