const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
        console.log('At your service, sir')
    }
}

let thirdAbility = ironMan.abilities[2]
console.log(thirdAbility)

ironMan.abilities.forEach(abilities => {
console.log(abilities[i])
}
console.log(IronAbilities);

console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

ironMan["marvelMovieAppearances"]['spiderManHomecoming'] = 'true'
console.log(ironMan["marvelMovieAppearances"]['spiderManHomecoming'])

function createCaptain(){
    return {
        abilities:['first', 'second','peak human stregnth'],
        aliases: {
            superheroName: "Captain America",
        }
        sayPhrase: () => {
            return "I can do this all day"
        }
    }
}
console.log(createCaptain().aliases.superheroName)
console.log(captainAmerica.sayPhrase());


const blackWidow = {
    aliases: {
        realName: "Naltalia Alianovna Romanova",
        otherNotableAliases: "Natalie Rushman"
    }
    console.log(blackWidow.aliases.realName)
}

//MCU MOVIES
const mcuMovies = [
  ['ant-man', 'ant-man and the wasp'],
  ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
  ['black panther'],
  ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
  ['doctor strange'],
  ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
  ['the hulk'],
  ['iron man', 'iron man 2', 'iron man 3'],
  ['spiderman: homecoming'],
  ['thor', 'thor: the dark world', 'thor: ragnarok']
]

// ```
for(let i = 0; i < mcuMovies.length; i++) {
    for(let idx = 0; idx < mcuMovies[i].length; idx++) {
        console.log(mcuMovies[i][idx]);
    }


for(let i = 0; i < mcuMovies; i++){
    for(j = 11; j <= 20; j++){
        console.log([i][j]);
    }
}

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}
console.log(instruments.electric[1]);
console.log(instruments.acoustic[2]);

instruments.guitar.electric.forEach(guitar => {
    console.log(guitar)
});