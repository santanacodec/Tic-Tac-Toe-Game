var turn="X";
var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#",];
var computerTurn="0";
var computerOn = false;
var count=0;

document.getElementById('turnX').addEventListener('click', () => {
    turn = "O";
    computerTurn= "X";
    document.getElementById('turnX').classList.remove('btn-primary');
    document.getElementById('turnO').classList.add('btn-primary');
});

document.getElementById('turnO').addEventListener('click', () => {
    turn = "X";
    computerTurn= "O";
    document.getElementById('turnO').classList.remove('btn-primary');
    document.getElementById('turnX').classList.add('btn-primary');
});

function computersTurn() {
    var turnTaken = false;
    while(turnTaken === false && count!==5) {
        
    }
}