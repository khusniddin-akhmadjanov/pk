import { pk } from "./information.js";

const labels = [
  `${pk.DeminimisAnni.values[0].name} - ${pk.DeminimisAnni.values[0].data}`,
  `${pk.DeminimisAnni.values[1].name} - ${pk.DeminimisAnni.values[1].data}`,
  `${pk.DeminimisAnni.values[2].name} - ${pk.DeminimisAnni.values[2].data}`,
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#4E549D",
      backgroundColor: "#4E549D",
      data: [
        `${pk.DeminimisAnni.values[0].data}`,
        `${pk.DeminimisAnni.values[1].data}`,
        `${pk.DeminimisAnni.values[2].data}`,
      ],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
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
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
