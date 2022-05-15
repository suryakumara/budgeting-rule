import styled from "styled-components";

const Input = styled("input")`
  width: 100%;
  height: 60px;
  padding-left: 10px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
`;

const Register = () => {
  return (
    <>
      <div className="flex justify-center mt-[200px]">
        <div className="border border-black rounded-xl  w-[700px]">
          <div className="grid grid-cols-2 gap-7 py-14">
            <div className="py-2 pl-10">
              <div className="py-2">Username</div>
              <Input />
              <div className="py-2">Password</div>
              <Input />
              <div className="py-2">Confirm Password</div>
              <Input />
            </div>
            <div className="py-14">
              <h1 className="text-7xl">Budget rule app</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
