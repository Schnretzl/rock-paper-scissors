/*
Take input from user
    input rock, paper, or scissors
        if input is not one of those
            display error message and ask again

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