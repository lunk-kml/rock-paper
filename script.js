function getComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0){
    return 'rock';
  } else if(randomNumber===1){
    return 'paper';
  } else if(randomNumber===2){
    return 'scissor';
  } else {
    alert('Error!');
  }
};


function getPlayerChoice(){
  var playerInput=prompt('Welcome! Make your first move. Rock, Paper, or Scissor. Best out of 5 wins.');
  playerInput=playerInput.toLowerCase();
  if(playerInput==='rock' || playerInput==='paper' || playerInput==='scissor'){
    return playerInput;
  } else {
    alert('Error!');
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
    return `You won this round... ${playerSelection} beat ${computerSelection}!`;
  } else{
    return `You lost this round... ${computerSelection} beat ${playerSelection}!`;
  }
};

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    /*console.log("Hello! Let's play.");
    console.log(' ');*/
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        alert(`(Computer) My choice: ${computerSelection}. (Human) Your choice: ${playerSelection}.`);
        console.log(`(Computer) My choice: ${computerSelection}. (Human) Your choice: ${playerSelection}.`);
        alert(playRound(playerSelection, computerSelection));
        console.log(playRound(playerSelection, computerSelection));
        console.log(' ');
        
        let result=playRound(playerSelection, computerSelection);
        if(result===`You won this round... ${playerSelection} beat ${computerSelection}!`){
            scorePlayer++;
        } else if(result===`You lost this round... ${computerSelection} beat ${playerSelection}!`){
            scoreComputer++;
        }
     }
     
     
     if (scorePlayer > scoreComputer) {
        alert("You scored more wins. You are the overall winner!");
        console.log("You scored more wins. You are the overall winner!");
      } else if (scorePlayer < scoreComputer) {
        alert("You lost! I scored more wins. Computers rules!");
        console.log("You lost! I scored more wins. Computers rules!");
      } else {
        alert("It's a tie game.");
        console.log("It's a tie game.");
      }

      alert('Game Over!');
      console.log('Game Over!');
};
console.log(game());