import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/config";
import useAuthContext from "../hooks/useAuthContext";

const FormInputSalary = () => {
  const [salary, setSalary] = useState("");

  const handleCalculate = async () => {
    const ref = collection(db, "data-user");
    await addDoc(ref, { salary: salary, uid: "" });
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white  px-8 pt-6 pb-8 mb-4  shadow-lg h-52 rounded">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="salary">
            Masukkan Gaji Anda (Rupiah)
          </label>
          <input
            type="number"
            onChange={(e) => setSalary(e.target.value)}
            min="0"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner"
          />
        </div>
        <div className="">
          <button
            className="bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInputSalary;
