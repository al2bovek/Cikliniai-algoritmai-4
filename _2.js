 "use strict";
//  2  Degalai.
const kiekDienuTruksKelione = (t, n) => {
    let d = 1;
  while (t > 0) {
  d % 2 !== 0 ? t -=2 * n : t -= n;
  d++;
  }
  return `Keliauti bus galima ${d - 1} dienų/(as)/(ą)`
}
const bakoTalpa = prompt("bako talpa");
const kuroSanaudas = prompt("kuro sanaudas")

document.getElementById("loop").innerHTML = kiekDienuTruksKelione(bakoTalpa, kuroSanaudas);