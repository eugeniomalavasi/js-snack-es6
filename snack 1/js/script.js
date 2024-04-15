bicycle = [
    {
        bikeName: "Colnago",
        weight: 9.5,
    },
    {
        bikeName: "Pinarello",
        weight: 8.6,
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


let globalWeight = 0;
let bikeNameGlobal = "";
// ciclo forEach per estrarre contenuto array di obj
bicycle.forEach((cycleObj, i) => {
    const {bikeName, weight} = cycleObj;
    // console.log(bikeName,weight);
    if(i === 0) {
        globalWeight = weight;
        // console.log(globalWeight);
    } else if (weight < globalWeight) {
        bikeNameGlobal = bikeName
        globalWeight = weight
    }
})
console.log(globalWeight, bikeNameGlobal);

// seleziono elementi nel dom per la stampa
const nameOut = document.getElementById("bike_brand")
nameOut.innerHTML = bikeNameGlobal
const weightOut = document.getElementById("bike_weight")
weightOut.innerHTML = globalWeight
