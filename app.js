const turnX = document.getElementById('turnX');
const turnO = document.getElementById('turnO');
const tick = document.querySelector('.tic');
let hash = "#";
let turn="X";
let turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
let computerTurn="0";
let computerOn = false;
let count=0;

turnX.addEventListener('click', () => {
    turn = "O";
    computerTurn= "X";
    turnX.classList.remove('btn-primary');
    turnO.classList.add('btn-primary');
    reset()
});

turnO.addEventListener('click', () => {
    turn = "X";
    computerTurn= "O";
    turnO.classList.remove('btn-primary');
    turnX.classList.add('btn-primary');
    reset()
});

function computersTurn() {
    let turnTaken = false;
    while(turnTaken === false && count!==5) {
        let compsMove = (Math.random()*8).toFixed();
        let move = document.getElementById(compsMove).textContent; 
        if(move === "#") {
            move = computerTurn;
            turnTaken = true;
            turns[compsMove] = computerTurn;
           //console.log("THIS " + compsMove);
            document.getElementById(compsMove).innerHTML = move;
        } 
    }
}

function playersTurn(turn, id) {
    let spotTaken = document.getElementById(id);
    // console.log("test " + id + " test");
    if(spotTaken.textContent === "#") {
        //console.log("HELLO");
        count++;
        turns[id] = turn;
        spotTaken.textContent = turn;
        winner(turns, turn);
        if(computerOn === false) {
            computersTurn();
            winner(turns, computerTurn);
        }
    }
}

function winner (turnArr, currentTurn) {
    if (turnArr[0] === currentTurn && turnArr[1] === currentTurn && turnArr[2] === currentTurn) {
        computerOn = true;
        reset();      
        alert("Player " + currentTurn + " wins! (0, 1, and 2 spots)");
        toggle();
    } else if (turnArr[2] === currentTurn && turnArr[4] === currentTurn && turnArr[6] === currentTurn) {
        computerOn = true;
        reset();       
        alert("Player " + currentTurn + " wins! (2, 4, and 6 spoys)");
        toggle();
    } else if (turnArr[0] === currentTurn && turnArr[3] === currentTurn && turnArr[6] === currentTurn) {
        computerOn = true;
        reset();       
        alert("Player " + currentTurn + " wins! (0, 3, and 6 spots)");
        toggle();
    } else if (turnArr[0] === currentTurn && turnArr[4] === currentTurn && turnArr[8] === currentTurn) {
        computerOn = true;
        reset();       
        alert("Player " + currentTurn + " wins! (0, 4, and 8 spots)");
        toggle();
    } else if (turnArr[1] === currentTurn && turnArr[4] === currentTurn && turnArr[7] === currentTurn) {
        computerOn = true;
        reset();        
        alert("Plater " + currentTurn + " wins! (1, 4, and 7 spots)");
        toggle();
    } else if (turnArr[2] === currentTurn && turnArr[5] === currentTurn && turnArr[8] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins (2, 5, and 8 spots)");
        toggle();
    } else if (turnArr[3] === currentTurn && turnArr[4] === currentTurn && turnArr[5] === currentTurn) {
        computerOn = true;
        reset();        
        alert("Player " + currentTurn + " wins (3, 4, and 5 spots)");
        toggle();
    } else if (turnArr[6] === currentTurn && turnArr[7] === currentTurn && turnArr[8] === currentTurn) {
        computerOn = true;
        reset();       
        alert("Player " + currentTurn + " wins (6, 7, and 8 spots)");
        toggle();
    }
}

/** 
tick.forEach(e => {
    e.addEventListener('click', () => {
      var slot = e.id;
      console.log(slot);
    });
  })
*/

document.body.addEventListener('click', function(e){
    if(e.target.classList.contains("tic")){
        let slot = e.target.id;
        console.log(slot);
        playersTurn(turn, slot);
    }
}); 

function reset() {
    turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    tick.innerHTML="#";
    computerOn = false;
}

function toggle() {
    var gameApp = document.getElementById('game');
    gameApp.style.display="none";
    alert("REFRESH THE PAGE");
}