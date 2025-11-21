"use strict";
// 5.  Kurjeris

let suma = prompt("Įveskite sumą: ");
const parengtiPervežimųStatistiką = () => {
    const sumos = [];
    let k;
    let kiekIvykdėUžsakymų;
    while (sumos.at(-1) != 0) {
        suma = prompt("Įveskite sumą: ");
        sumos.push(suma);
    }
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
return `1. ${k} `;
}

document.getElementById("loop").innerHTML = parengtiPervežimųStatistiką(suma);