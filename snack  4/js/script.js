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

let patente = "";
people.map((curPerson) => {
    if(curPerson.età <= 18) {
        patente = "puoi guidare";
    } else {
        patente = "non puoi guidare";
    }
    console.log(`il nome è ${curPerson.nome} il cognome è ${curPerson.cognome} e ${patente}`); 
})