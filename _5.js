"use strict";
// 5.  Kurjeris

let suma = prompt("Įveskite sumą: ");
const parengtiPervežimųStatistiką = () => {
    const sumos = [];
    let k;
    let kiekIvykdėUžsakymų;
    while (suma != 0) {
        sumos.push(suma);
        (kiekIvykdėUžsakymų = (arr) => {
            k = 0;
            arr.forEach(element => {
                if (+element > 100) {
                    k++;
                    console.log(k);
                    
                }
                    console.log(k);

            });
                    console.log(k);

            return k;
        })(sumos);

        suma = prompt("Įveskite sumą: ");
    }
return `1. ${k} `;
}

document.getElementById("loop").innerHTML = parengtiPervežimųStatistiką(suma);