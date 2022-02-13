import { pk } from "./information.js";

document.querySelector(".top__title").textContent = pk.azienda.nome;
document.querySelector(
  ".top__title-number"
).textContent = `C.F ${pk.azienda.CF}`;

var elTheadTr = document.querySelector(".thTr");

for (var m = 0; m < pk.TabellaAiuti.Etichette.length; m++) {
  var elTh = document.createElement("th");
  elTheadTr.appendChild(elTh);
  elTh.textContent = pk.TabellaAiuti.Etichette[m];
}

//table start

for (var l = 0; l < pk.TabellaAiuti.values.length; l++) {
  var tr = document.createElement("tr");
  document.querySelector(".tbody").appendChild(tr);
  for (var p = 0; p < pk.TabellaAiuti.values[l].data.length; p++) {
    var td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = pk.TabellaAiuti.values[l].data[p];
  }
}
//table finished

//Utilizatto and Resudio

//Deminimis Value

document.querySelector(
  ".result-box-price-utiliz"
).textContent = `${pk.Deminimis.utiliz} \u20AC`;

document.querySelector(
  ".result-box-price-resudio"
).textContent = `${pk.Deminimis.residuo} \u20AC`;
