{ 

  let playerPoints = 0;
  let computerPoints = 0;
  
  
  function results () {
  document.getElementById('results').innerHTML = playerPoints + " - " + computerPoints;
  } 

  setInterval(results);

  const playGame = function(playerInput) {

  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function(randomNumber) {
    if(randomNumber == 1) {
      return 'kamień';
    }
    else if(randomNumber == 2) {
      return 'papier';
    }
    else if(randomNumber == 3) {
      return 'nożyce';
    }
    else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
    }
  }

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);


  const argComputerMove =  getMoveName(randomNumber);
  const argPlayerMove = getMoveName(playerInput);

  console.log('moves:', argComputerMove, argPlayerMove); 

  const displayResult = function(argComputerMove, argPlayerMove) {  
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz! <i class="far fa-smile-beam"></i>' );
      win();
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Ty przegrywasz! <i class="far fa-sad-cry"></i>');
      lose();
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis! <i class="far fa-surprise"></i>');
      return 'Remis!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!  <i class="far fa-smile-beam"></i>');
      win();
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Ty przegrywasz! <i class="far fa-sad-cry"></i>');
      lose();
    } 
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Remis! <i class="far fa-surprise"></i>');
      return 'Remis!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Ty przegrywasz! <i class="far fa-sad-cry"></i>');
      lose();
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty przegrywasz! <i class="far fa-sad-cry"></i>');
      lose();
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Remis! <i class="far fa-surprise"></i>');
      return 'Remis!';
    }

    
  }

  displayResult(argComputerMove,argPlayerMove);

  function win() {
    playerPoints = playerPoints + 1;
  }
  function lose() {
    computerPoints = computerPoints + 1;
  }
  
} 

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
  

}