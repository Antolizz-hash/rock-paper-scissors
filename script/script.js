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


//get all the buttons
let buttons = document.querySelectorAll('button'); 

//loop through the btns
buttons.forEach(button =>{
    button.addEventListener('click', getHumanChoice);
})

//get human choice
function getHumanChoice(e){
    let humanSelection = e.target.value;
    console.log(humanSelection);
    

    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);

    
}



//declare and initialize players score
let humanScore = 0;
let computerScore = 0;
let ties = 0;

//play for one round
function playRound(computerSelection,humanSelection){

    let result = document.querySelector('#result');
    
    //compare player selection to determine the winner or if it's a tie
    if(humanSelection === 'rock' && computerSelection === "paper")
    {
        
        result.textContent = "Human wins";
        
    }
    else if(humanSelection === 'paper' && computerSelection === 'scissors'){
        
        result.textContent = "Human wins";
        
    }
    else if(humanSelection === 'scissors' && computerSelection === 'rock'){
        
        
        result.textContent = "Human wins"
        
        
    }
    else if(humanSelection === computerSelection){
        
        result.textContent = "it is a tie"
        
        
    }
    else{
           
          result.textContent = "Computer wins";   
        
          
    }

}



