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
    console.log(computerChoice);
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt('Enter either rock, paper, or scissors:').toLowerCase();
    return humanChoice;
     
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


