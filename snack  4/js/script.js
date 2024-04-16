people = [
    {
        nome: "Eugenio",
        cognome: "Malavasi",
        età: "33",
    },
    {
        nome: "Gino",
        cognome: "Lavandino",
        età: "108",
    },
    {
        nome: "Tino",
        cognome: "Cagliai",
        età: "6",
    }
]

const newArray = people.map((curPerson) => {
    let patente = "";
    if(curPerson.età <= 18) {
        return (`il nome è ${curPerson.nome} il cognome è ${curPerson.cognome} e non puoi guidare`);
    } else {
        return (`il nome è ${curPerson.nome} il cognome è ${curPerson.cognome} e puoi guidare`);
    }
    // return (`il nome è ${curPerson.nome} il cognome è ${curPerson.cognome} e ${patente}`); 
})

console.log(newArray);