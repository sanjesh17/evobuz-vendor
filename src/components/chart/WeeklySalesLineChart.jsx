import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeeklySalesLineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "This Week",
        data: [1, 4, 5, 3, 2, 1, 12],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Last Week",
        data: [10, 15, 5, 8, 4, 2, 6],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 4000,
      easing: "easeOutBounce",
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: "rgba(255, 255, 255, 0.8)" },
      },
      title: {
        display: true,
        text: "Weekly Sales Comparison",
        color: "rgba(255, 255, 255, 0.8)",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "rgba(255, 255, 255, 0.8)" },
      },
      x: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "rgba(255, 255, 255, 0.8)" },
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%", padding: "10px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeeklySalesLineChart;
