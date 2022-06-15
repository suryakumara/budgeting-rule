import { useState } from "react";
import { calculateBuget } from "../utils/getCalculateBudget";

const FormInputSalary = ({ onChange }) => {
  const [salary, setSalary] = useState("");

  const handleCalculate = async () => {
    const { fiftyPercent, twentyPercent, thirtyPercent } = calculateBuget(salary);
    onChange({ fifty: fiftyPercent, twenty: twentyPercent, thirty: thirtyPercent });
  };

  return (
    <div className="m-auto sm:w-80 ">
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
