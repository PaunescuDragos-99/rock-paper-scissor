function getComputerChoice () {
    const value = ["ROCK","PAPER","SCISSOR"];
    return value[(Math.floor(Math.random()*3))];
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const computerScore = document.querySelector('.computerScore');
const playerScore = document.querySelector('.playerScore');
const tieScore = document.querySelector('.tie');
const playAgain = document.querySelector('.playAgain');

const results = document.querySelector(".results");
const winner = document.createElement('p');
results.appendChild(winner);

let computer = 0;
let player = 0;
let tie = 0;

function disableBtns(){
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

playAgain.addEventListener('click',() =>{
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    computer = 0;
    player = 0;
    tie = 0;
    playerScore.innerText = `Player: ${player}`;
    computerScore.innerText = `Computer: ${computer}`;
    tieScore.innerText = `Tie: ${tie}`;
    winner.innerText = ` `;
    playAgain.innerText = 'Reset game!';
});

rock.addEventListener('click',() => { 
    const rock = 'rock';
    return playGame(rock);
});

paper.addEventListener('click',() => {
    const paper = 'paper'
    return playGame(paper);
});

scissor.addEventListener('click',() => {
    const scissor = 'scissor';
    return playGame(scissor);
});


function playGame(playerChoice){
    playerSelection = playerChoice.toUpperCase();
    computerSelection = getComputerChoice();
    if (playerSelection=== computerSelection)
    {
        return game(1);
    }else if(playerSelection === "ROCK" && computerSelection === "PAPER" || 
             playerSelection === "SCISSOR" && computerSelection === "ROCK" || 
             playerSelection === "PAPER" && computerSelection === "SCISSOR")
            {
            return game(2);
        }else{
            return game(3);
    }
}


function game(gameResult){
    if (computer < 5 || player < 5){
        if(gameResult == 2){
            computer++;
            computerScore.innerText = `Computer: ${computer}`;
            if(computer == 5){
                disableBtns();
                playAgain.innerText = 'Play again';
                return winner.innerText = `The winner is the computer! Final score: player: ${player} computer: ${computer}`;
            }
            return 0;
        }else if(gameResult == 3){
            player++;
            playerScore.innerText = `Player: ${player}`;
            if(player == 5){
                disableBtns();
                playAgain.innerText = 'Play again';
                return winner.innerText = `The winner is the player! Final score: player: ${player} computer: ${computer}`;

            }
            return 0;
        }else{
            tie ++;
            tieScore.innerText = `Tie: ${tie}`;
            return 0;
        }
    }
}




