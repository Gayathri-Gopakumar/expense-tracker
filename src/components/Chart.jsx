import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((expense) => expense.category),
    datasets: [
      {
        label: "Expenses",
        data: data.map((expense) => parseFloat(expense.amount)),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)"
        ],
        hoverOffset: 4
      }
    ]
  };

  return <Pie data={chartData} />;
};

export default Chart;


