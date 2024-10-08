let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "buttton2", "button3", "button4"],
}


function newGame() {
    game.score = 0;
    
}

module.exports = {game, newGame};
