
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let playerSelection;
let computerSelection;


function getComputerChoice(){
    return(Math.floor(Math.random() * 3));
}

function getPlayerChoice(){
    let input = prompt("Rock, paper, or scissors?");
    let inputUpper = input.toUpperCase();
    while((inputUpper != "ROCK") 
        && (inputUpper != "PAPER")
        && (inputUpper != "SCISSORS")){
        alert("Input must be rock, paper, or scissors!");
        input = prompt("Rock, paper, or scissors?");
        inputUpper = input.toUpperCase();
    }

    return(inputUpper);
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
        ties++;
        return("There was a tie!");
    }
    else if((playerSelectionToInt - computerSelection === 1) ||    //player win
            playerSelectionToInt - computerSelection === -2){
                playerWins++;
                return(`You win! ${playerSelectionFirstUpper} beats ${computerSelectionText}`);       
    }
    else if((playerSelectionToInt - computerSelection === -1) ||   //player lose
            (playerSelectionToInt - computerSelection === 2)){
                computerWins++;
                return(`You lose! ${computerSelectionText} beats ${playerSelectionFirstUpper}`);           
    }
    else{
        return("there was an error");
        //error
    }
}
    

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Current score:\nPlayer: ${playerWins}, Computer: ${computerWins}, Ties: ${ties}`);
    }
}
    /*play a round
      determine winner and add 1 to their wins
      move to next round
      do this 5 times*/

//-------------------------------------------------------------------------------------

game();