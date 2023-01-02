function getComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0){
    return 'rock';
  } else if(randomNumber===1){
    return 'paper';
  } else if(randomNumber===2){
    return 'scissor';
  } else {
    console.log('Error!');
  }
};


function getPlayerChoice(){
  var playerInput=prompt('Welcome! Do you think you can beat a computer? Make your first move. Rock, Paper, or Scissor.');
  playerInput=playerInput.toLowerCase();
  if(playerInput==='rock' || playerInput==='paper' || playerInput==='scissor'){
    return playerInput;
  } else {
    console.log('Error!');
  }
};


function playRound(playerSelection,computerSelection){
  if(playerSelection===computerSelection){
    return 'Tie.';
  } else if (
    (playerSelection==='rock' && computerSelection==='scissor') ||
    (playerSelection==='paper' && computerSelection==='rock') ||
    (playerSelection==='scissor' && computerSelection==='paper')
  ){
    return `You won. ${playerSelection} beat ${computerSelection}. Congrats!`;
  } else{
    return `You lost. ${computerSelection} beat ${playerSelection}. Haha computers rule!`;
  }
};

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    console.log("Hello! Let's play.");
    console.log(' ');
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`(Computer) My choice: ${computerSelection}. 
(Human) Your choice: ${playerSelection}.`)
        console.log(playRound(playerSelection, computerSelection));
        console.log(' ');
        
        let result=playRound(playerSelection, computerSelection);
        if(result===`You won. ${playerSelection} beat ${computerSelection}. Congrats!`){
            scorePlayer++;
        } else if(result===`You lost. ${computerSelection} beat ${playerSelection}. Haha computers rule!`){
            scoreComputer++;
        }
     }
     console.log('Game Over!');
     
     if (scorePlayer > scoreComputer) {
        console.log("You are the overall winner!");
      } else if (scorePlayer < scoreComputer) {
        console.log("You lost! I am the overall winner. Computers rules!");
      } else {
        console.log("It's a tie game.");
      }
};
console.log(game());