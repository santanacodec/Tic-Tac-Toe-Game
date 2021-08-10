const turnX = document.getElementById('turnX');
const turnO = document.getElementById('turnO');
const tick = document.querySelector('.tic');
var turn="X";
var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
var computerTurn="0";
var computerOn = false;
var count=0;

turnX.addEventListener('click', () => {
    turn = "O";
    computerTurn= "X";
    turnX.classList.remove('btn-primary');
    turnO.classList.add('btn-primary');
    reset();
});

turnO.addEventListener('click', () => {
    turn = "X";
    computerTurn= "O";
    turnO.classList.remove('btn-primary');
    turnX.classList.add('btn-primary');
    reset();
});

function computersTurn() {
    var turnTaken = false;
    while(turnTaken === false && count!==5) {
        var compsMove = (Math.random()*10).toFixed();
        var move= document.innerHTML("#" + compsMove).text();
        if(move === "#") {
            document.querySelector("#" + compsMove).text(computerTurn);
            taken = true;
            turns[compsMove] = computerTurn;
        }
    }
}

function playersTurn(turn, id) {
    var spotTaken = document.querySelector("#" + id).text();
    if(spotTaken === "#") {
        count++;
        turns[id] = turn;
        document.querySelector("#" + id).text(turn);
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
    } else if (turnArr[2] === currentTurn && turnArr[4] === currentTurn && turnArr[6] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (2, 4, and 6 spoys)");
    } else if (turnArr[0] === currentTurn && turnArr[3] === currentTurn && turnArr[6] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (0, 3, and 6 spots)");
    } else if (turnArr[0] === currentTurn && turnArr[4] === currentTurn && turnArr[8] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (0, 4, and 8 spots)");
    } else if (turnArr[1] === currentTurn && turnArr[4] === currentTurn && turnArr[7] === currentTurn) {
        computerOn = true;
        reset();
        alert("Plater " + currentTurn + " wins! (1, 4, and 7 spots)");
    } else if (turnArr[2] === currentTurn && turnArr[5] === currentTurn && turnArr[8] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins (2, 5, and 8 spots)");
    } else if (turnArr[3] === currentTurn && turnArr[4] === currentTurn && turnArr[5] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins (3, 4, and 5 spots)");
    } else if (turnArr[6] === currentTurn && turnArr[7] === currentTurn && turnArr[8] === currentTurn) {
        computerOn = true;
        reset();
        alert("Player " + currentTurn + " wins (6, 7, and 8 spots)");
    }
}

tick.addEventListener('click', () =>{
    var slot = document.querySelector("id");
    playersTurn(turn, slot);
});

function reset() {
    turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    tick.innerHTML="#";
    computerOn = false;
}