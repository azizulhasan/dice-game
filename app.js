/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, winningNumber, lastDice;
scores = [0, 0]
roundScore = 0
activePlayer = 0


init()


// document.querySelector('#score-0').innerHTML = 0;
// document.querySelector('#score-1').innerHTML = 0;
// document.querySelector('#current-0').innerHTML = 0;
// document.querySelector('#current-1').innerHTML = 0;


document.querySelector('.btn-roll').addEventListener('click',function(){
	

	if(gamePlaying) {
		// 1. random number
	var dice1  = Math.floor(Math.random()*6)+1
	var dice2  = Math.floor(Math.random()*6)+1

	// 2. display the result
	 document.getElementById('dice-1').style.display ='block';
	 document.getElementById('dice-2').style.display ='block';
	 document.getElementById('dice-1').src = 'dice-'+ dice1+ '.png'
	 document.getElementById('dice-2').src = 'dice-'+ dice2+ '.png'

	 if(dice1 !== 1 && dice2 !== 1){
		//add score 
		roundScore += dice1 + dice2;
		document.querySelector('#current-'+activePlayer).innerHTML = roundScore;
	} else {
		//next player
		nextPlayer();

		}
	
	
	 /*
	// 3. update the result If the rolled number was not 1
	if(dice ===6 && lastDice === 6) {
		scores[activePlayer] =0
		document.querySelector('#score-'+activePlayer).textContent = '0'; 
		nextPlayer();

	}else if(dice !== 1){
		//add score 
		roundScore += dice
		document.querySelector('#current-'+activePlayer).innerHTML = roundScore;
	} else {
		//next player
		nextPlayer();

		}

		lastDice= dice
		*/
	}

})


document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying) {
			// add current score to Global score
			scores[activePlayer] += roundScore

			//Update UI
		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]; 
		var input = document.querySelector('.final-score').value;
		var winningScrore;
		if(input){
			winningScrore = input
		} else {
			winningScrore =100;
		}

			// Check if the player  won the game
			if (scores[activePlayer] >= winningScrore) { //makeFull(target)
				document.querySelector('#name-'+activePlayer).innerHTML="<h6>WINNER !</h6>"
				document.getElementById('dice-1').style.display ='none';
				document.getElementById('dice-2').style.display ='none';
				document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
				document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
				gamePlaying = false;
			}else {
				
				nextPlayer();
			}

	}
	


	
})
// don't repeat yourself principle
function nextPlayer() {
	activePlayer ===0 ? activePlayer=1: activePlayer=0
	roundScore =0
	// make both roundScore 0
	document.querySelector('#current-0').textContent =0 ;
	document.querySelector('#current-1').textContent = 0 ;

	// add active class to player 0 or player 1
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');


	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.getElementById('dice-1').style.display ='none';
	document.getElementById('dice-2').style.display ='none';
}

document.querySelector('.btn-new').addEventListener('click', function(){
	init()
	//document.querySelector('.player-0-panel').classList.add('active');
	// document.querySelector('.player-1-panel').classList.toggle('active');
})

// game initialization
function init() {
	document.querySelector('#score-0').innerHTML = 0;
	document.querySelector('#score-1').innerHTML = 0;
	document.querySelector('#current-0').innerHTML = 0;
	document.querySelector('#current-1').innerHTML = 0;
	document.getElementById('dice-1').style.display ='none';
	document.getElementById('dice-2').style.display ='none';

	document.querySelector('#name-0').innerHTML="Player 1"
	document.querySelector('#name-1').innerHTML="Player 2"

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.add('active');
	

	$('#mypera').style.display = 'none'

	roundScore = 0
	activePlayer = 0
	scores= [0,0]
	gamePlaying=true
}



 let isShown = false;

 	$('#mybtn').addEventListener('click', function(){
 	if(isShown ) {
 		$('#mypera').style.display = 'none'
 		isShown = false;
 		// $('#mybtn').innerHTML ='Game Rule'
 		 	} 
 	else {
 		$('#mypera').style.display = 'block'
 		
 		isShown = true;
 	}

 })




function $(selector) {
	return	document.querySelector(selector)
}




