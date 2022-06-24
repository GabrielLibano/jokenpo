
let placarComputer = document.getElementById("placar-computer");
let userScore = document.getElementById("user-score");
let middleScore = document.getElementById("middle-score");
let resultado = document.getElementById("resultado");
let countComp = 1;
let countUser = 1;
let countImpate = 1;
let choices = ['r', 'p', 's'];


function jogada(userChoice){
    let computerChoic = computerChoice();
    let userChoic = userChoice;
    checkWin(computerChoic, userChoic);
}

function checkWin(computerChoic, userChoic){
    let escritoComputer;
    let escritoUser;

    escritoComputer = checkEscritoComputer(computerChoic);
    escritoUser = checkEscritoUser(userChoic);

    if((computerChoic == 'r' && userChoic == 's') || (computerChoic == 's' && userChoic == 'p') || (computerChoic == 'p' && userChoic == 'r')){
        placarComputer.innerHTML = `<span>${"Computador:"}</span><br> <span>${countComp++}</span>`;
        resultado.innerHTML = `<span>${"A escolha do computador foi "}${escritoComputer}${" já a sua foi de " + escritoUser + ", melhoras pq ta facil"}</span>`
    }else if (userChoic == 'r' && computerChoic == 's' || userChoic == 's' && computerChoic == 'p' || userChoic == 'p' && computerChoic == 'r'){
        userScore.innerHTML = `<span>${"Seu Score:"}</span><br> <span>${countUser++}</span>`;
        resultado.innerHTML = `<span>${"A escolha do computador foi "}${escritoComputer}${" já a sua foi de " + escritoUser + " parabens... Foi sorte"}</span>`
    }else{
        middleScore.innerHTML = `<span>${"Empate:"}</span><br> <span>${countImpate++}</span>`
        resultado.innerHTML = `<span>${"A escolha do computador foi "}${escritoComputer}${" e a sua de " + escritoUser + " tambem"}</span>`
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
function computerChoice(){
    let Choice = Math.floor(Math.random()*3);
    let choicee = choices[Choice];
    return choicee;
}
function checkEscritoComputer(computerChoic,escritoComputer){
    if (computerChoic == 'r'){
        return escritoComputer = "Pedra";
    }else if(computerChoic == 'p'){
        return escritoComputer = "Papel";
    }else{
        return escritoComputer = "Tesoura";
    }
}
function checkEscritoUser(userChoic,escritoUser){
    if (userChoic == 'r'){
        return escritoUser = "Pedra";
    }else if(userChoic == 'p'){
        return escritoUser = "Papel";
    }else{
        return escritoUser = "Tesoura";
    }
}


