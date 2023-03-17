
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let playerSelection;
let computerSelection;


function getComputerChoice(){
    return(Math.floor(Math.random() * 3));
}

    let choice;
    const results = document.querySelector('#results');

    
        const rockBtn = document.querySelector('#rock');
        rockBtn.onclick = () => {
            if(playerWins === 0 && computerWins === 0)
                clearFinalResults();
            document.querySelector('#results').textContent = (playRound("ROCK", getComputerChoice()));
            displayResults();            
        }
        
        const paperBtn = document.querySelector('#paper');
        paperBtn.onclick = () => {
            if(playerWins === 0 && computerWins === 0)
                clearFinalResults();
            results.textContent = (playRound("PAPER", getComputerChoice()));
            displayResults();
            
        }
        
        const scissorsBtn = document.querySelector('#scissors');
        scissorsBtn.onclick = () => {
            if(playerWins === 0 && computerWins === 0)
                clearFinalResults();
            results.textContent = (playRound("SCISSORS", getComputerChoice()));
            displayResults();
            
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
    }
}

function displayResults(){
    document.querySelector('#cpuWins').textContent = "CPU wins:" + computerWins;
    document.querySelector('#playerWins').textContent = "Player wins:" + playerWins;
    if(playerWins === 5){
        document.querySelector('#finalWin').textContent = "Player wins!";
        resetScore();
    }
    if(computerWins === 5){
        document.querySelector('#finalWin').textContent = "CPU wins!";
        resetScore();
    }
}

function resetScore(){
    playerWins = 0;
    computerWins = 0;
}

function clearFinalResults(){
    document.querySelector('#finalWin').textContent = "";
}
