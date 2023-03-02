/*


Determine winner
    compare user input to computer input
    store winner in a variable
Display message
    victory screen if user wins, tie if same choice, otherwise losing screen
*/

function getComputerChoice(){
    // Take input from computer
    // randomly select one of three options for rock paper or scissors and return result
    // 0 = rock, 1 = paper, 2=scissors
    return(Math.floor(Math.random()*3));
}

function playerSelection(){
    // Take input from user
    // input rock, paper, or scissors
    // if input is not one of those
    // display error message and ask again
    let input = prompt("Rock, paper, or scissors?");
    let upperInput = input.toUpperCase();
    while(upperInput != "ROCK" && upperInput != "PAPER" && upperInput != "SCISSORS"){
        console.log(`You entered ${input}.  You must choose either Rock, paper, or scissors!`);
        input = prompt("Rock, paper, or scissors?");
        upperInput = input.toUpperCase();
    }
    if(upperInput === "ROCK"){
        return 0;
    }
    if(upperInput === "PAPER"){
        return 1;
    }
    if(upperInput === "SCISSORS"){
    }return 2;

    console.log("Selection choice code did not work.")
    return -1;
}
