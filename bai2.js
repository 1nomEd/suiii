const game = {
    team1: 'Bayern Mucnich',
    team2: 'Real Madrid',

    players: [
        [
            'Neuer',
            'Pavard',
            'Coman',
            'Alaba',
            'Kimich',
            'Goretzka',
            'Muller',
            'Gnarby',
            'Lewandowski',
            'Davies',
            'Martinez',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }   
};

for (const [i,players] of game.scored.entries())
    console.log('Goall ${i + 1}: ${players}');


const odds = Object.values(game.odds);
let average = 0;
for (const odds of odds) average += odds;
average /= odds.length;
console.log(average);


for (const [team,odd] of Object.entries(game.odds)){
    const  teamStr = team === 'x' ? 'draw' : 'Victory $ {game[team]}';
    console.log('Odds of ${teamStr} ${odd}');
}