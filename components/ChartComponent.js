import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useEffect, useMemo, useState } from "react";
import useCollection from "../hooks/useCollection";
import { Doughnut } from "react-chartjs-2";
import Loading from "./Loading";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ data: result }) => {
  const { documents } = useCollection("data-user");
  const [statusLoading, setStatusLoading] = useState(false);
  const [data, setData] = useState({
    labels: ["50%: Needs", "30%: Wants", "20%: Savings"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (result) {
      setStatusLoading(true);
      setTimeout(() => {
        setStatusLoading(false);
      }, 2000);

      setData({
        labels: ["50%: Needs", "30%: Wants", "20%: Savings"],
        datasets: [
          {
            label: "# of Votes",
            data: [result.fifty, result.thirty, result.twenty],
            backgroundColor: ["#FEF9A7", "#FAC213", "#F77E21", "#D61C4E"],
            borderColor: ["#FEF9A7", "#FAC213", "#F77E21", "#D61C4E"],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [result]);

  return (
    <div className="m-auto sm:w-80 h-80 md:w-2/5 lg:w-3/5">
      {statusLoading ? <Loading /> : <Doughnut data={data} />}
    </div>
  );
};

export default ChartComponent;
