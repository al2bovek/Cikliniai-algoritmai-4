"use strict";
// 4. Knyga.
let i = 1;

const skaitymas = (m) => {
    while (m >= i) {
        m -= i
        i++;
    }
    const vidutiniskai = (knygosSkyriųSkaičiai / i).toFixed(2);
    return `Tadas visą knygą perskaitys per ${i} dienas (-ų). 
Tadas vidutiniškai per dieną perskaitė ${vidutiniskai} skyrius 
(-ų).`;
}
const knygosSkyriųSkaičiai = prompt("Įveskite knygos skyrių skaičių:");

document.getElementById("loop").innerHTML = skaitymas(knygosSkyriųSkaičiai);