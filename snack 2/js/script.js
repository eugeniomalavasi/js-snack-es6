teams = [{
        teamName: "Bologna",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Milan",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Roma",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Sassuolo",
        points: 0,
        fouls: 0
    },
]

let foulsResult;
console.log(foulsResult);

teams.forEach((curTeam) => {
    curTeam.points = Math.floor((Math.random() * 100) + 1);
    curTeam.fouls = Math.floor((Math.random() * 100) + 1);
    foulsResult = curTeam.fouls
})
console.log(teams);
// const newTeamsArray = [...teams];
const {fouls,teamName} = teams; 
console.log(fouls,teamName);
