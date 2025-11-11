// Preparazione funzione

//function clickButton () {
//    console.log("Click!");
//}

//document.querySelector("#bottone").addEventListener("click", clickButton)


//Altri due approcci:


// Evento funzione anonima:
//1. document.querySelector("#bottone").addEventListener("click", function () {
//    console.log("cliccato");
//} );

// Evento con arrow function:
//2. document.querySelector("#bottone").addEventListener("click", () => {
//    console.log("cliccato");
//});

/**Prima prova: 


const lampadina = document.getElementById("lampadina-spenta");
const bottone = document.getElementById("bottone");

let accesa = false;

bottone.addEventListener("click", function() {
    accesa = !accesa;
    if (!accesa) {
        lampadina.src = "./lampadine/img/white_lamp.png";  //oppure lampadina.src.includes("white-lamp.png") per far sì che funzioni anche al di fuori del mio PC//
        bottone.textContent = "Accendi!";
    } else {
        lampadina.src = "./lampadine/img/yellow_lamp.png";
        bottone.textContent = "Spegni!";
        }
})
 

Seconda prova con toggle:

const lampadina = document.querySelector("#lampadina-spenta");
const bottone = document.querySelector("#bottone");

bottone.addEventListener("click", () => {
    lampadina.classList.toggle("accesa");

 if (lampadina.classList.contains("accesa")) {
        bottone.textContent = "Spegni!";
      } else {
        bottone.textContent = "Accendi!";
      };
})




*/S
