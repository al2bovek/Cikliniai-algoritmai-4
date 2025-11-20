"use strict";
// 3.  Saldainiai.
const saldainiuKiekis = prompt("Petriukas  gavo  n  saldainių");
const suvalgePerDiena = prompt("Per dieną suvalgės x1, x2, ...xn").split(",");

const saldainiuValgimoAtaskaita = (num, arr) => {
    let dienu;
    let i = 0;
    let tarpineReiksme = +arr[i];
    while (num >= +arr[i] && i <= arr.length) {
        num -= +arr[i];
        i++;
        tarpineReiksme = +arr[i];
        dienu = i;
    }

    return `Petriukui saldainių užteks ${dienu} dienoms 
ir jam liks ${num} saldainiai.`;
}
document.getElementById("loop").innerHTML = saldainiuValgimoAtaskaita(saldainiuKiekis, suvalgePerDiena);
