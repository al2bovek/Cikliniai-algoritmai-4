"use strict";
// 7. Karnavalas.
const result = {
    ejo: null,
    "Karnavalo Dalyviai": null,
}
const rengiamasKarnavalas = () => {
    let ejo = 0;
    const karnavaloDalyviai = [];
    while (true) {
        const karnavaloDalyvis = +prompt("Įveskite kiek balų gavo mokinys: nuo 1 iki 10 imtinai");
        if (karnavaloDalyvis == 0) break;
        if (karnavaloDalyvis < 0 || karnavaloDalyvis > 10) {
            alert("Neteisingos duomenis");
        }
        ejo++;
        if (karnavaloDalyvis >= 5 && karnavaloDalyvis <= 10) {
            karnavaloDalyviai.push(karnavaloDalyvis);
        }
    }
    result.ejo = ejo;
    result["Karnavalo Dalyviai"] = karnavaloDalyviai.length;
    return result;
}
rengiamasKarnavalas();
document.getElementById("loop").innerHTML = `I karnavalą ėjo ${result.ejo} mokiniai, pateko ${result["Karnavalo Dalyviai"]}.`;
