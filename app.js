var turn="X";
var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#",];
var computerTurn="0";
var computerOn = false;
var count=0;

document.getElementById('turnX').addEventListener('click', () => {
    turn = "O";
    computerTurn= "X";
    document.getElementById('turnX').remove('btn-primary');
    document.getElementById('turnO').add('btn-primary');
    
})