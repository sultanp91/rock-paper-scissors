let gameOptions = ["rock", "paper", "scissors"];

let computerChoices = function (){
return gameOptions[Math.floor(Math.random()*3)]
}

let playerScore = 0;
let computerScore = 0;

let gameOver = false;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");

let playerDisplay = document.querySelector("#playerdisplay");
let computerDisplay = document.querySelector("#computerdisplay");
let gameDisplay = document.querySelector("#gamestatus");

let displayScore = () => {
    playerDisplay.textContent = playerScore;
    computerDisplay.textContent = computerScore;
}

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    displayScore();
    gameDisplay.textContent = "Rock, Paper, Scissors!";
})

rock.addEventListener("click", (e) => {
        if(!gameOver){
            playRound(`${e.target.id}`);
            if(playerScore > 4){
                gameOver = true;
                displayScore();
               return gameDisplay.textContent = "YOU WIN";
            } else if(computerScore > 4){
                gameOver = true;
                displayScore();
                return gameDisplay.textContent = "YOU LOSE";
            }
            return displayScore();
        }   
});

let gamePlay = function (e) {
    if(!gameOver){
        console.log(playRound(`${e.target.id}`));
        displayScore();
        if(playerScore > 4){
            gameOver = true;
            gameDisplay.textContent = "YOU WIN";
        } else if(computerScore > 4){
            gameOver = true;
            gameDisplay.textContent = "YOU LOSE";
        }
    } 

}

paper.addEventListener("click", (e) => {
    if(!gameOver){
        playRound(`${e.target.id}`);
        if(playerScore > 4){
            gameOver = true;
            displayScore();
           return gameDisplay.textContent = "YOU WIN";
        } else if(computerScore > 4){
            gameOver = true;
            displayScore();
            return gameDisplay.textContent = "YOU LOSE";
        }
        return displayScore();
    }   
});


scissors.addEventListener("click", (e) => {
    if(!gameOver){
        playRound(`${e.target.id}`);
        if(playerScore > 4){
            gameOver = true;
            displayScore();
           return gameDisplay.textContent = "YOU WIN";
        } else if(computerScore > 4){
            gameOver = true;
            displayScore();
            return gameDisplay.textContent = "YOU LOSE";
        }
        return displayScore();
    }   
});


let playRound = function (playerChoice) {

    const computerSelection = computerChoices();

    if(playerChoice === computerSelection){
        gameDisplay.textContent = "Draw"
    }   else if(playerChoice === "rock"){
        switch(computerSelection){
            case "paper":
                computerScore++;
                gameDisplay.textContent = "YOU LOSE! Paper beats rock";
                break;
            case "scissors":
                playerScore++;
                gameDisplay.textContent = "YOU WIN! Rock beats scissors";
        }
    }   else if(playerChoice === "paper"){
        switch(computerSelection){
            case "rock": 
                playerScore++;           
                gameDisplay.textContent = "YOU WIN. Paper beats rock";
                break;
            case "scissors":
                computerScore++;
                gameDisplay.textContent = "YOU LOSE! Scissors beats paper";
        } 
    }   else if(playerChoice === "scissors"){
            switch(computerSelection){
                case "rock": 
                    computerScore++;
                    gameDisplay.textContent = "YOU LOSE! Rock beats scissors";
                    break;
                case "paper":
                    playerScore++;
                    gameDisplay.textContent = "YOU WIN! Scissors beats paper";
            }
    } 
}
