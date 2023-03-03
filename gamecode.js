function getComputerChoice(){
    return(Math.floor(Math.random() * 3));
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    let playerSelectionUpper = playerSelection.toUpperCase();
    let playerSelectionToInt;
    if(playerSelectionUpper === "ROCK"){
        playerSelectionToInt = 0;
    }

    if(playerSelectionToInt - computerSelection === 0){            //tie        
        return("tie");
    }
    else if((playerSelectionToInt - computerSelection === 1) ||    //player win
            playerSelectionToInt - computerSelection === -2){
                return("you win");       
    }
    else if((playerSelectionToInt - computerSelection === -1) ||   //player lose
            (playerSelectionToInt - computerSelection === 2)){
                return("you lose");            
    }
    else{
        return("there was an error");
        //error
    }
}
    
    console.log(playRound(playerSelection, computerSelection));