"use strict";
//  1. Voverytė.
const riešutėlių = prompt("riešutėlių");
const voverytėSuVoveriukų = +prompt("voveriukų") + 1;

const keliomsDienomsUžteks = (x, v, ziemaTrunka = 92) => {
    let sukauptaRiesutu = Math.floor(x / (v * 3));
    let analize = sukauptaRiesutu > ziemaTrunka ? "užteks" : "neužteks";

    return `Riešutų sukaupta ${sukauptaRiesutu} dienoms 
Riešutų ${analize} visai žiemai`;
}
document.getElementById("loop").innerHTML = keliomsDienomsUžteks(riešutėlių, voverytėSuVoveriukų);