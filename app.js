
let placarComputer = document.getElementById("placar-computer");
let userScore = document.getElementById("user-score");
let middleScore = document.getElementById("middle-score");

let countComp = 1;
let countUser = 1;
let countImpate = 1;
let choices = ['r', 'p', 's'];


function jogada(choice){
    let Choice = Math.floor(Math.random()*3);
    let choicee = choices[Choice];
    let jogadas = choice;
    if((choicee == 'r' && jogadas == 's') || (choicee == 's' && jogadas == 'p') || (choicee == 'p' && jogadas == 'r')){
        return placarComputer.innerHTML = `<span>${"Computador:"}</span><br> <span>${countComp++}</span>`;
    }else if (jogadas == 'r' && choicee == 's' || jogadas == 's' && choicee == 'p' || jogadas == 'p' && choicee == 'r'){
        return userScore.innerHTML = `<span>${"Seu Score:"}</span><br> <span>${countUser++}</span>`;
    }else{
        return middleScore.innerHTML = `<span>${"Empate:"}</span><br> <span>${countImpate++}</span>`
    }
} 

function restart(){
    placarComputer.innerHTML = `<span>${"Computador:"}</span>`;
    userScore.innerHTML = `<span>${"Seu Score:"}</span>`;
    middleScore.innerHTML = `<span>${"Empate:"}</span>`;
    countComp = 1;
    countImpate = 1;
    countUser = 1;
}


