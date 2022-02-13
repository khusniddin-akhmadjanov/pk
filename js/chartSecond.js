import { pk } from "./information.js";

var ctx = document.getElementById("secondChart");
var secondChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Utilizatto", "Residuo"],
    datasets: [
      {
        label: ["Utilizatto", "Residuo"],
        data: [
          pk.Deminimis.Max - pk.Deminimis.residuo,
          pk.Deminimis.Max - pk.Deminimis.utiliz,
        ],
        backgroundColor: ["#4E549D", "#F3F4FF"],
        borderColor: ["#4E549D", "#F3F4FF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
});
