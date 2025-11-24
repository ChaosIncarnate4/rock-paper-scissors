let humanScore = 0;
let computerScore = 0;

document.getElementById('humanScore').innerHTML = humanScore;
document.getElementById('computerScore').innerHTML = computerScore;


function getComputerChoice() {
    let attack = Math.floor(Math.random() * 3);
    
    switch (attack) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    // keep prompting until the user enters 1, 2, 3 or cancels
    while (true) {
        const attack = prompt("Rock, Paper Scissors!\n1. Rock\n2. Paper\n3. Scissors");
        if (attack === null) return null; // user cancelled

        const choice = attack.trim();
        if (choice === "1") return "Rock";
        if (choice === "2") return "Paper";
        if (choice === "3") return "Scissors";

        // invalid input — inform the user and loop again
        alert('Please enter 1, 2 or 3 (or Cancel to stop).');
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        document.getElementById('winnerDeclaration').textContent = "Tie!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        document.getElementById('winnerDeclaration').textContent = "You've crushed the competition!";
        document.getElementById('humanScore').innerHTML++;
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        document.getElementById('winnerDeclaration').textContent = "Player pulverized!";
        document.getElementById('computerScore').innerHTML++;
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        document.getElementById('winnerDeclaration').textContent = "You've ripped apart your rival!";
        document.getElementById('humanScore').innerHTML++;
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        document.getElementById('winnerDeclaration').textContent = "Your competitor's cut you up!";
        document.getElementById('computerScore').innerHTML++;
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        document.getElementById('winnerDeclaration').textContent = "You've engulfed your enemy!";
        document.getElementById('humanScore').innerHTML++;
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        document.getElementById('winnerDeclaration').textContent = "The adversary has asphyxiated you!";
        document.getElementById('computerScore').innerHTML++;
        computerScore++;
    } else {
        console.log("Error");
    }

    scoreCheck();
}

function scoreCheck() {
    if (humanScore === 5) {
        document.getElementById('winnerDeclaration').textContent = "You've won!";
    } else if (computerScore === 5) {
        document.getElementById('winnerDeclaration').textContent = "Oof, better luck next time.";
    }
}

function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     let cpu = getComputerChoice();
    //     let hum = getHumanChoice();
    //     playRound(hum, cpu);
    // }

    // scoreCheck();
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});



// console.log(getComputerChoice());
