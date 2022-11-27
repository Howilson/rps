let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("pscore");
const computerScore_div = document.getElementById("oscore");
const scoreboard_section = document.querySelector (".scoreboard");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById ("r-img");
const paper_div = document.getElementById ("p-img");
const scissors_div = document.getElementById ("s-img");

function getComputerChoice() {
    const choices = ['r-img', 'p-img', 's-img'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter === "r-img") return "Rock";
    if (letter === "p-img") return "Paper";
    if (letter === "s-img") return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML =computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord (computerChoice) + ". YOU WIN!";

}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML =computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord (computerChoice) + ". You Lose.";
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " cannot beat " + convertToWord (computerChoice) + ". It's a tie.";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
        case "r-imgs-img":
        case "p-imgr-img":
        case "s-imgp-img":
            win(userChoice, computerChoice);
            break;
        case "r-imgp-img":
        case "p-imgs-img":
        case "s-imgr-img":
            lose(userChoice, computerChoice);
            break;
        case "r-imgr-img":
        case "p-imgp-img":
        case "s-imgs-img":
            draw(userChoice, computerChoice);
            break;
   }
}



function main(){
    rock_div.addEventListener('click', function() {
        game("r-img");
    })

    paper_div.addEventListener('click', function() {
        game("p-img");
    })

    scissors_div.addEventListener('click', function() {
        game("s-img");
    })
}

main();