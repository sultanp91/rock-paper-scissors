let gameOptions = ["rock", "paper", "scissors"];

let computerPlay = function (){
return gameOptions[Math.floor(Math.random()*3)]
}

let playerSelection = function () {
    prompt("Rock? Paper? Scissors? Which will it be?");
}

let playRound = function () {
    let playerSelection = prompt("rock, paper, scissors?").toLowerCase();

    if(playerSelection === "rock"){
        switch(computerPlay()){
            case "rock": 
                console.log("draw");
                break;
            case "paper":
                console.log("paper beats rock");
                break;
            case "scissors":
                console.log("rock beats paper");
        }
    } else if(playerSelection === "paper"){
        switch(computerPlay()){
            case "rock": 
                console.log("paper beats rock");
                break;
            case "paper":
                console.log("draw");
                break;
            case "scissors":
                console.log("scissors beats paper");
        } 
    }
        
        else if(playerSelection === "scissors"){
            switch(computerPlay()){
                case "rock": 
                    console.log("rock beats scissors");
                    break;
                case "paper":
                    console.log("drawscissors beats paper");
                    break;
                case "scissors":
                    console.log("draw");
            }
    
        } else {
            console.log("invalid option");
        }
     

}