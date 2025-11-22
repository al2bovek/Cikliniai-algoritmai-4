"use strict";
// 8. Atvirukai. 
const kiekRūšiųAtvirukųUžtektųVisiemsLinoDraugams = () => {
    const m = +prompt(`Keliems draugams Linas nori 
dovanoti atvirukus?`);
    const n = +prompt(`Kiek rūšių atvirukų yra 
parduotuvėje?`);
    const k = [];
    let x = 0;
    while (k.length < n) {
        k.push(+prompt(`Kiek yra rūšies atvirukų?`));
    }
    for (const el of k) {
        if (el >= m) {
            x++;
        }
    }
    return x;
}
document.getElementById("loop").innerHTML = `${kiekRūšiųAtvirukųUžtektųVisiemsLinoDraugams()} rūšių atvirukų užtektų visiems Lino 
draugams`;