import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import useLogin from "../../hooks/useLogin";

const Input = styled("input")`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border-width: 1px;
  border-color: #646464;
  border-radius: 4px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();
  const router = useRouter();

  const handleLogin = () => {
    login(email, password);
    router.push("/");
  };

  return (
    <>
      <div className="flex justify-center mt-[200px]">
        <div className="border shadow-xl rounded-xl  w-[700px]">
          <div className="grid grid-cols-2 gap-7 py-14">
            <div className="py-2 pl-10">
              <div className="py-2">Email</div>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} />
              <div className="py-2">Password</div>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <div className="mt-5">
                <button
                  className=" w-28 bg-gray-700 transition ease-in-out delay-150  hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
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

export default Login;
