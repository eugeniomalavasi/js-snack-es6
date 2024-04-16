const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

let dieselCars = []
let petrolCars = []
console.log(petrolCars);
let otherCars = []

automobili.forEach((curCar) => {
    if (curCar.alimentazione === "benzina") {
        petrolCars.push(curCar)
    } else if (curCar.alimentazione === "diesel") {
        dieselCars.push(curCar)
    } else {
        otherCars.push(curCar)
    }
})

// petrolCars = automobili.filter((curCar) => {
//     if (curCar.alimentazione === "benzina") {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(petrolCars);

// dieselCars = automobili.filter((curCar) => {
//     if (curCar.alimentazione === "diesel") {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(dieselCars);

// otherCars = automobili.filter((curCar) => {
//     if (curCar.alimentazione !== "diesel" && curCar.alimentazione !== "benzina") {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(otherCars);