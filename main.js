// Preparazione funzione

//function clickButton () {
//    console.log("Click!");
//}

//document.querySelector("#bottone").addEventListener("click", clickButton)


//Altri due approcci:


// Evento funzione anonima:
//1. document.querySelector("#bottone").addEventListener("clcik", function () {
//    console.log("cliccato");
//} );

// Evento con arrow function:
//2. document.querySelector("#bottone").addEventListener("click", () => {
//    console.log("cliccato");
//});

const lampadina = document.getElementById("lampadina-spenta");
const bottone = document.getElementById("bottone");

let accesa = false;

bottone.addEventListener("click", function() {
    accesa = !accesa;
    if (!accesa) {
        lampadina.src = "./lampadine/img/white_lamp.png";
        bottone.textContent = "Accendi!";
    } else {
        lampadina.src = "./lampadine/img/yellow_lamp.png";
        bottone.textContent = "Spegni!";
        }
})

