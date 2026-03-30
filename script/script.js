//get computer choice
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
//store computer choice in a variable
let computerSelection = getComputerChoice();

//get human choice
function getHumanChoice(){
    let humanChoice = prompt('Enter either rock, paper, or scissors:').toLowerCase();
    return humanChoice;
}

//store human choice into a variable
let humanSelection = getHumanChoice();

//declare and initialize players score
let humanScore = 0;
let computerScore = 0;
let ties = 0;

//play for one round
function playRound(computerSelection,humanSelection){
    //compare player selection to determine the winner or if it's a tie
    if(humanSelection === 'rock' && computerSelection === "paper")
    {
        return 'human';
    }
    else if(humanSelection === 'paper' && computerSelection === 'scissors'){
        
        return 'human';
    }
    else if(humanSelection === 'scissors' && computerSelection === 'rock'){
        
        
        return 'human';
    }
    else if(humanSelection === computerSelection){
        console.log('it is a tie');
        return 'draw';
    }
    else{
        console.log(computerSelection + ' beats '+humanSelection+'. Computer wins')
        
        return 'computer';
    }
    


}
console.log(humanSelection);
console.log(computerSelection);


// play game for five rounds
function playGame(){
    for(let i = 1; i<5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let game = playRound(computerSelection,humanSelection);
        if(game === 'human'){
            humanScore++;
        }
        else if(game === 'computer'){
            computerScore++
        }
        else{
            ties++
        }
    }
    console.log('Human Score: '+humanScore);
    console.log('Computer Score: '+ computerScore);
    console.log('draws '+ ties);

    if(humanScore>computerScore){
        console.log('Human wins')
    }
    else if(computerScore>humanScore){
        console.log('computer wins')
    }
}
console.log(playGame());


