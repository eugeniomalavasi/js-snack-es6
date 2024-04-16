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



teams.forEach((curTeam) => {
    curTeam.points = getRndInteger(0,100);
    curTeam.fouls = getRndInteger(0,100);
})

const newTeams = teams.map((curTeam) => {
    const { teamName, fouls } = curTeam;
    return { teamName, fouls };
})
console.log(newTeams);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
};
