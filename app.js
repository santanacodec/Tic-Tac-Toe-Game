var turn="X";
var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
var computerTurn="0";
var computerOn = false;
var count=0;

document.getElementById('turnX').addEventListener('click', () => {
    turn = "O";
    computerTurn= "X";
    document.getElementById('turnX').classList.remove('btn-primary');
    document.getElementById('turnO').classList.add('btn-primary');
    reset();
});

document.getElementById('turnO').addEventListener('click', () => {
    turn = "X";
    computerTurn= "O";
    document.getElementById('turnO').classList.remove('btn-primary');
    document.getElementById('turnX').classList.add('btn-primary');
    reset();
});

function computersTurn() {
    var turnTaken = false;
    while(turnTaken === false && count!==5) {
        var compsMove = (Math.random()*10).toFixed();
        var move= document.querySelector("#" + compsMove).text();
        if(move === "#") {
            document.querySelector("#" + compsMove).text(computerTurn);
            taken = true;
            turns[compsMove] = computerTurn;
        }
    }
}

function playersTurn(turn, id) {
    let spotTaken = document.querySelector("#" + id).text();
    if(spotTaken === "#") {
        count++;
        turns[id] = turn;
        document.querySelector("#" + id).text(turn);
    }
}

document.getElementsByClassName("tic").addEventListener('click', () => {
    let slot = this.Attr("id");
    playersTurn(turn, slot);
});

function reset() {
    turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    document.getElementsByClassName("tic").text("#");
    computerOn = false;
}

function winProcess (turnArr, currentTurn) {
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
    }
}