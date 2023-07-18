const game = gameObject();

function numPointsScored(playerName) {
    const allPlayers = { ...game.home.players, ...game.away.players };
    const player = allPlayers[playerName];

    if (player) {
        return player.points;
    }
}

function shoeSize(playerName) {
    const allPlayers = { ...game.home.players, ...game.away.players };
    const player = allPlayers[playerName];

    if (player) {
        return player.shoe;
    }
}

function teamColors(teamName) {
    for (let gameKey in game) {
        let nameOfTeam = game[gameKey].teamName;
        if (teamName === nameOfTeam) {
            return game[gameKey].colors;
        }
    }
}

function teamNames() {
    const names = [];
    for (let gameKey in game) {
        let nameOfTeam = game[gameKey].teamName;
        names.push(nameOfTeam)
    }
    return names;
}

function playerNumbers(teamName) {
    const numbers = [];
    for (let gameKey in game) {
        let nameOfTeam = game[gameKey].teamName;
        if (teamName === nameOfTeam) {
            const players = game[gameKey].players;
            for (let playerName in players) {
                let playerNumber = players[playerName].number;
                numbers.push(playerNumber);
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
    const allPlayers = { ...game.home.players, ...game.away.players };
    const player = allPlayers[playerName];
    return player;
}

function bigShoeRebounds() {
    const allPlayers = { ...game.home.players, ...game.away.players };
    const shoes = [];
    
    for (let playerName in allPlayers) {
        const playerShoe = allPlayers[playerName].shoe
        shoes.push(playerShoe)
    }
    
    const bigShoePlayer = getPlayerByShoeSize(Math.max(...shoes));
    return bigShoePlayer.rebounds;
}

function getPlayerByShoeSize(shoeSize) {
    const allPlayers = { ...game.home.players, ...game.away.players };
    
    for (let playerName in allPlayers) {
        const playerShoe = allPlayers[playerName].shoe
        if (shoeSize === playerShoe) {
            return allPlayers[playerName];
        }
    }
}