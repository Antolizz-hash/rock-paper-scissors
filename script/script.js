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

//get all the buttons
let buttons = document.querySelectorAll('button'); 

//loop through the btns
buttons.forEach(button =>{
    button.addEventListener('click', getHumanChoice);
})

//get human choice
function getHumanChoice(e){
    let humanChoice = e.target.value;
    console.log(humanChoice);
    return humanChoice;

    
}

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
        
        return 'draw';
    }
    else{
              
        return 'computer';
    }

}


// console.log(playGame());


