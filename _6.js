"use strict";
// 6. Skaičiuotuvas.

const aritmetinisSkaičiavimai = () => {
    const veiksmas = +prompt(`veskite veiksmą:' ' suma  -  1,  atimtis  -  2,  daugyba  -  3, 
didžiausia  reikšmė  sraute  -  4,  mažiausia  reikšmė  sraute  -  5.`);
    const skaiciai = [];
    let result;
    while (true) {
        const skaicius = prompt("Įveskite skaicius: ");
        if (skaicius != 0) {
            skaiciai.push(skaicius);
        } else break;
    }
    if (skaiciai.length > 0) {
        switch (veiksmas) {
            case 1: result = `suma: ${skaiciai.reduce((ac, el) => ac + +el, 0)}`;
                break;
            case 2: result = `atimtis: ${skaiciai.reduce((ac, el) => ac - el)}`;
                break;
            case 3: result = `daugyba: ${skaiciai.reduce((ac, el) => ac * el)}`;
                break;
            case 4: result = `max: ${Math.max(...skaiciai)}`;
                break;
            case 5: result = `min: ${Math.min(...skaiciai)}`;
                break;
            default: result = "Ivyko klaida, Danutė pavargo";
                break;
        }
        return result;
    }
    return `Danutė skundžiasi,  kad  sunku  ir  nepatogu  daug  kartų  spaudinėti 
skaičiuotuvo  klavišus`;
}

document.getElementById("loop").innerHTML = aritmetinisSkaičiavimai();