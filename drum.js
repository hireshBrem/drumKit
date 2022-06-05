const eBtn = document.getElementById("e-btn");
const rBtn = document.getElementById("r-btn");
const fBtn = document.getElementById("f-btn");
const gBtn = document.getElementById("g-btn");
const hBtn = document.getElementById("h-btn");
const vBtn = document.getElementById("v-btn");
const bBtn = document.getElementById("b-btn");
const jBtn = document.getElementById("j-btn");
const iBtn = document.getElementById("i-btn");
const kBtn = document.getElementById("k-btn");

let crashSnd = new Audio("/sounds/crash-cymbal-sound-c-sharp-key-07-T4H.wav");
let rideSnd = new Audio("/sounds/00s-ride-one-shot-f-sharp-key-05-sX2.wav");
let floorTomSnd = new Audio("/sounds/Floor-Tom-Drum-Hit-Level-3A-www.fesliyanstudios.com.mp3");
let midTomSnd = new Audio("/sounds/mid-tom-drum-sound-g-key-03-Ae0.wav");
let highTomSnd = new Audio("/sounds/Small-Tom-Drum-Hit-Level-5B-www.fesliyanstudios.com.mp3");
let kickSnd = new Audio("/sounds/Bass-Drum-Hit-Level-6c-www.fesliyanstudios.com.mp3");
let snareSnd = new Audio("/sounds/Snare-Drum-Hit-Level-5a-www.fesliyanstudios.com.mp3");
let hi_hat_openSnd = new Audio("/sounds/Hi-Hat-Open-Hit-A1-www.fesliyanstudios.com.mp3");
let hi_hat_closedSnd = new Audio("/sounds/Hi-Hat-Closed-Hit-E2-www.fesliyanstudios.com.mp3"); 

window.addEventListener("keydown", (event)=>{
    if(event.key === "e") {
        crashSnd.play();
    }
    if(event.key === "r") {
        rideSnd.play();
    }
    if(event.key === "f") {
        floorTomSnd.play();
    }
    if(event.key === "g") {
        midTomSnd.play();
    }
    if(event.key === "h") {
        highTomSnd.play();
    }
    if(event.key === "v" || event.key === "b"){
        kickSnd.play();
    }
    if(event.key === "j") {
        snareSnd.play();
    }
    if(event.key === "i") {
        hi_hat_openSnd.play();
    }
    if(event.key === "k") {
        hi_hat_closedSnd.play();
    }
});