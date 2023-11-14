function getComputerChoice () {
    const value = ["ROCK","PAPER","SCISSOR"];
    return value[(Math.floor(Math.random()*3))];
}

function getPlayerChoice(){
    playerValue = prompt("Choose what you want: ");
    return playerValue;
}

function playGame(){
    playerSelection = getPlayerChoice().toUpperCase();
    computerSelection = getComputerChoice();
    console.log (playerSelection," ", computerSelection);
    if (playerSelection=== computerSelection)
    {
        return 1;
    }else if(playerSelection === "ROCK" && computerSelection === "PAPER" || 
             playerSelection === "SCISSOR" && computerSelection === "ROCK" || 
             playerSelection === "PAPER" && computerSelection === "SCISSOR")
            {
            return 2;
        }else{
            return 3;
    }
}

function game(){
    let computer = 0;
    let player = 0;
    let tie = 0;
    while (computer < 3 || player < 3){
        let gameResult = playGame();
        if(gameResult == 2){
            computer++;
        }else if(gameResult == 3){
            player++;
        }else{
            tie ++;
        }
    }
    console.log(player)
    if(player == 3){
        return console.log("The player won!");
    }else{
        return console.log("The computer won!");
    }
}

game();

