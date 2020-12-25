let gameOptions = ["rock", "paper", "scissors"];

let computerChoices = function (){
return gameOptions[Math.floor(Math.random()*3)]
}

let playerScore = 0;
let computerScore = 0;

let game = function(e){
    while(playerScore < 3 && computerScore < 3){     
       return playRound(e.target.id)
    } if(playerScore === 3){
        return "Congrats you win!!!"
    } else if (computerScore === 3
        ){
        return "YOU LOSE"
    }
}

let gameOver = false;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");

let playerDisplay = document.querySelector("#playerdisplay");
let computerDisplay = document.querySelector("#computerdisplay");

let displayScore = () => {
    playerDisplay.textContent = playerScore;
    computerDisplay.textContent = computerScore;
}

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    displayScore();
})

rock.addEventListener("click", (e) => {
        
        if(!gameOver){
            console.log(playRound(`${e.target.id}`));
            displayScore();
            if(playerScore > 4){
                gameOver = true;
            } else if(computerScore > 4){
                gameOver = true;
            }
        }   
});

paper.addEventListener("click", (e) => {
    if(!gameOver){
        console.log(playRound(`${e.target.id}`));
        displayScore();
        if(playerScore > 4){
            gameOver = true;
        } else if(computerScore > 4){
            gameOver = true;
        }
    }  
});

scissors.addEventListener("click", (e) =>{
    if(!gameOver){
        console.log(playRound(`${e.target.id}`));
        displayScore();
        if(playerScore > 4){
            gameOver = true;
        } else if(computerScore > 4){
            gameOver = true;
        }
    }  
});


let playRound = function (playerChoice) {

    const computerSelection = computerChoices();

    if(playerChoice === computerSelection){
        return "Draw"
    }   else if(playerChoice === "rock"){
        switch(computerSelection){
            case "paper":
                computerScore++;
                return "YOU LOSE! Paper beats rock";
                break;
            case "scissors":
                playerScore++;
                return "YOU WIN! Rock beats scissors";
        }
    }   else if(playerChoice === "paper"){
        switch(computerSelection){
            case "rock": 
                playerScore++;           
                return "YOU WIN. Paper beats rock";
                break;
            case "scissors":
                computerScore++;
                return "YOU LOSE! Scissors beats paper";
        } 
    }   else if(playerChoice === "scissors"){
            switch(computerSelection){
                case "rock": 
                    computerScore++;
                    return "YOU LOSE! Rock beats scissors";
                    break;
                case "paper":
                    playerScore++;
                    return "YOU WIN! Scissors beats paper";
            }
    } 
}
