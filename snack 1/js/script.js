bicycle = [
    {
        bikeName: "Pinarello",
        weight: 8.6,
    },
    {
        bikeName: "Colnago",
        weight: 9.5,
    },
    {
        bikeName: "Cipollini",
        weight: 7.5,
    },
    {
        bikeName: "Bianchi",
        weight: 9.7,
    }
]

// seleziono elementi nel dom per la stampa
const nameOut = document.getElementById("bike_brand")
const weightOut = document.getElementById("bike_weight")
let domOut = "";
// ciclo forEach per estrarre contenuto array di obj
bicycle.forEach((cycleObj) => {
    const {bikeName, weight} = cycleObj;
    console.log(bikeName,weight);
    
})

