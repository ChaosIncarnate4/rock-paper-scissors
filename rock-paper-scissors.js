let humanScore = 0;
let computerScore = 0;

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
        console.log("Tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You've crushed the competition!")
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Player pulverized!")
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You've ripped apart your rival!")
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Your competitor's cut you up!")
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You've engulfed your enemy!")
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("The adversary has asphyxiated you!")
        computerScore++;
    } else {
        console.log("Error");
    }
}

function scoreCheck() {
    if (humanScore === computerScore) {
        console.log("Draw!");
    } else if (humanScore > computerScore) {
        console.log("Victory!")
    } else {
        console.log("Defeat!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let cpu = getComputerChoice();
        let hum = getHumanChoice();
        playRound(hum, cpu);
    }

    scoreCheck();
}



// console.log(getComputerChoice());
