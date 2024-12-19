let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const messageElement = document.querySelector("#msg");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");
const restartButton = document.querySelector("#restart-btn");
const toggleButton = document.querySelector("#toggle");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

const displayMessage = (message, bgColor) => {
    messageElement.innerText = message;
    messageElement.style.backgroundColor = bgColor;
};

const updateScore = (winner) => {
    if (winner === "user") {
        userScore++;
        userScoreElement.innerText = userScore;
    } else if (winner === "computer") {
        compScore++;
        compScoreElement.innerText = compScore;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        displayMessage("It's a draw! Play again.", "#081b31");
        return;
    }

    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winningConditions[userChoice] === computerChoice) {
        displayMessage(`You win! ${userChoice} beats ${computerChoice}`, "green");
        updateScore("user");
    } else {
        displayMessage(`You lose! ${computerChoice} beats ${userChoice}`, "red");
        updateScore("computer");
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const computerChoice = generateComputerChoice();
        determineWinner(userChoice, computerChoice);
    });
});

restartButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreElement.innerText = userScore;
    compScoreElement.innerText = compScore;
    displayMessage("Game reset! Play your move.", "#081b31");
});

let isLightMode = true;

toggleButton.addEventListener("click", () => {
    document.body.style.backgroundColor = isLightMode ? "black" : "white";
    document.body.style.color = isLightMode ? "white" : "black";
    isLightMode = !isLightMode;
});
