import React from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Label 1", "Label 2", "Label 3"],
          datasets: [
            {
              label: "Dataset 1",
              data: [20, 20, 30],
              backgroundColor: ["red", "blue", "green"],
            },
          ],
        }}
        height={200}
        width={300}
      />
    </div>
  );
};

export default BarChart;
