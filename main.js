// Preparazione funzione

function clickButton () {
    console.log("Click!");
}

document.querySelector("#bottone").addEventListener("click", clickButton)


//Altri due approcci:


// Evento funzione anonima:
//1. document.querySelector("#bottone").addEventListener("clcik", function () {
//    console.log("cliccato");
//} );

// Evento con arrow function:
//2. document.querySelector("#bottone").addEventListener("click", () => {
//    console.log("cliccato");
//});

const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("bottone");

let accesa = false;

