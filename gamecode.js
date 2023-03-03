let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();



function getComputerChoice(){
    return(Math.floor(Math.random() * 3));
}

function getPlayerChoice(){
    let input = prompt("Rock, paper, or scissors?");
    while(input.toUpperCase() != ("ROCK" || "PAPER" || "SCISSORS")){
        alert("Input must be rock, paper, or scissors!");
        input = prompt("Rock, paper, or scissors?");
    }

    return(input.toUpperCase());
}

//----------------------------------------------------------------

function playRound(playerSelection, computerSelection){
    
    let playerSelectionToInt;
        if(playerSelection === "ROCK"){
            playerSelectionToInt = 0;
            //playerSelectionFirstUpper = "Rock";
        }else if(playerSelection === "PAPER"){
            playerSelectionToInt = 1;
            //playerSelectionFirstUpper = "Paper";
        }else if(playerSelection === "SCISSORS"){
            playerSelectionToInt = 2;
            //playerSelectionFirstUpper = "Scissors";
        }
    let playerSelectionFirstUpper = playerSelection.slice(0,1) + (playerSelection.toLowerCase()).slice(1);
    let computerSelectionText;
    switch(computerSelection){
        case 0: computerSelectionText = "Rock"; break;
        case 1: computerSelectionText = "Paper"; break;
        case 2: computerSelectionText = "Scissors"; break;
        default: "Error in computer selection";
    }

    if(playerSelectionToInt - computerSelection === 0){            //tie        
        return("There was a tie!");
    }
    else if((playerSelectionToInt - computerSelection === 1) ||    //player win
            playerSelectionToInt - computerSelection === -2){
                return(`You win! ${playerSelectionFirstUpper} beats ${computerSelectionText}`);       
    }
    else if((playerSelectionToInt - computerSelection === -1) ||   //player lose
            (playerSelectionToInt - computerSelection === 2)){
                return(`You lose! ${computerSelectionText} beats ${playerSelectionFirstUpper}`);           
    }
    else{
        return("there was an error");
        //error
    }
}
    
    console.log(playRound(playerSelection, computerSelection));