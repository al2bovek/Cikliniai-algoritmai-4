"use strict";
// 5.  Kurjeris
const result = {
    "Kiek Ivykdė Užsakymų": null,
    "Vidutinę Sumą Per Dieną Išvežtu Prekių": null,
    "Kiek Iš Viso Prekių Išvežiojo": null,
}
const parengtiPervežimųStatistiką = () => {
    const sumos = [];
    let kiekIvykdėUžsakymų;
    while (true) {
        const suma = prompt("Įveskite sumą: ");
        if (suma == 0) {
            break;
        }
        sumos.push(suma);
    }
    (kiekIvykdėUžsakymų = (arr) => {
        let k = 0;
        arr.forEach(element => {
            if (+element > 100) {
                k++;
            }
        });
        kiekIvykdėUžsakymų = k;
        return kiekIvykdėUžsakymų;
    })(sumos);
    const vidutinęSumą = (arr) => {
        let sum = 0;
        let forReturn;
        if (arr.length === 0) {
          forReturn = arr.length;  
          return forReturn;
        }
        for (const element of arr) {
            sum += +element;
        }
        forReturn = (sum / sumos.length).toFixed(2);
        return forReturn;
    }
    result["Kiek Ivykdė Užsakymų"] = kiekIvykdėUžsakymų;
    result["Vidutinę Sumą Per Dieną Išvežtu Prekių"] = vidutinęSumą(sumos);
    result["Kiek Iš Viso Prekių Išvežiojo"] = sumos.length;
    return result;
}
parengtiPervežimųStatistiką();
document.getElementById("loop").innerHTML = `1. ${result["Kiek Ivykdė Užsakymų"]} <br> 2. ${result["Vidutinę Sumą Per Dieną Išvežtu Prekių"]} <br> 3. ${result["Kiek Iš Viso Prekių Išvežiojo"]}`;