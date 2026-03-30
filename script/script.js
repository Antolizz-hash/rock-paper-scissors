function getComputerChoice(){
    let computerChoice;
    let choice = Math.floor(Math.random()*3)
    if(choice ===0){
        computerChoice ='rock';
    }
    else if(choice===1){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissors';
    }
    return computerChoice.toLowerCase();
    
}
let computerSelection = getComputerChoice();



function getHumanChoice(){
    let humanChoice = prompt('Enter either rock, paper, or scissors:').toLowerCase();
    return humanChoice;
     
}
let humanSelection = getHumanChoice();


let humanScore = 0;
let computerScore = 0;

fun


