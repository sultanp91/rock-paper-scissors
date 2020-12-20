let gameOptions = ["rock", "paper", "scissors"];

let computerPlay = function (){
return gameOptions[Math.floor(Math.random()*3)]
}

let playerSelection = function () {
    prompt("Rock? Paper? Scissors? Which will it be?");
}

let playerScore = 0;
let computerScore = 0;

let playRound = function () {
    let playerSelection = prompt("rock, paper, scissors?").toLowerCase();

    if(playerSelection === "rock"){
        switch(computerPlay()){
            case "rock": 
                return "draw";
                break;
            case "paper":
                computerScore++;
                return "YOU LOSE! Paper beats rock";
                break;
            case "scissors":
                playerScore++;
                return "YOU WIN! Rock beats scissors";
        }
    } else if(playerSelection === "paper"){
        switch(computerPlay()){
            case "rock": 
                playerScore++;           
                return "YOU WIN. Paper beats rock";
                break;
            case "paper":
                return "draw";
                break;
            case "scissors":
                computerScore++;
                return "YOU LOSE! Scissors beats paper";
        } 
    }
        
        else if(playerSelection === "scissors"){
            switch(computerPlay()){
                case "rock": 
                    computerScore++;
                    return "YOU LOSE! Rock beats scissors";
                    break;
                case "paper":
                    playerScore++;
                    return "YOU WIN! Scissors beats paper";
                    break;
                case "scissors":
                    return "draw";
            }
    
        } else {
            return "invalid option";
        }
}

let game = function(){
    while(playerScore < 5 && computerScore < 5){
        let result = playRound()
        console.log(result);
    } if(playerScore === 5){
        return "Congrats you win!!!"
    } else if (computerPlay === 5){
        return "YOU LOSE"
    }
}
