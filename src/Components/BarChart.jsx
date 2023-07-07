import React from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Bar } from "react-chartjs-2";
import Data from "../assets/data.json";

const BarChart = () => {
  const labels = Data.map((item) => item.day);
  const currentDate = new Date();
  const dayOfWeekIndex = currentDate.getDay();

  const color = [
    "hsl(10, 79%, 65%)",
    "hsl(10, 79%, 65%)",
    "hsl(10, 79%, 65%)",
    "hsl(10, 79%, 65%)",
    "hsl(10, 79%, 65%)",
    "hsl(10, 79%, 65%)",
    "hsl(10, 79%, 65%)",
  ];

  color[dayOfWeekIndex - 1] = "hsl(186, 34%, 60%)";

  console.log(dayOfWeekIndex, "Day of Week");
  return (
    <div className="bar-chart">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: [],
              data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
              backgroundColor: color,
              borderRadius: 5, // Set the radius for rounded corners
            },
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: false,
          indexAxis: "x",
          elements: {
            bar: {
              borderWidth: 0,
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          responsive: true,
        }}
        height={300}
      />
    </div>
  );
};

export default BarChart;
