import { pk } from "./information.js";

var xValues = ["All"];
var yValues = [pk.Deminimis.utiliz, pk.Deminimis.residuo];
var barColors = ["#4E549D", "#fff"];

new Chart("circleChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        borderColor: ["#4E549D", "#4E549D"],
        data: yValues,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "World Wide Wine Production 2018",
    },
  },
});

document.querySelector(".circlePersentage").textContent = `${
  Math.round((pk.Deminimis.utiliz * 1000) / pk.Deminimis.Max) / 10
}%`;
