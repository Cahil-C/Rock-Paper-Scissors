let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");

let resultsContainer = document.querySelector(".results-container");
let content = document.createElement("div");
let scoreDisplay = document.createElement("p");
let winnerDisplay = document.createElement("p");

// Get the computer choice
function getComputerChoice ()
{
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice)
    {
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3:
            return "scissors";
    }
}


function playGame ()
{
    console.log("Welcome, let's play rock, paper, scissors")

    // Keep track of players score (computer and the human)
    let computerScore = 0;
    let humanScore = 0;

    // Get value of computer and human and pass it in as arguments for playRound()
    let computerChoice = undefined;
    let humanChoice = undefined;

    // Single Round
    function playRound (computerChoice, humanChoice)
    {
        if (computerChoice === "rock" && humanChoice === "rock")
        {
            content.textContent = `It's a tie! ${computerChoice} and ${humanChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "rock" && humanChoice === "paper")
        {
            humanScore += 1; 
            content.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "rock" && humanChoice === "scissors")
        {
            computerScore += 1;
            content.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "paper" && humanChoice === "rock")
        {
            computerScore += 1;
            content.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "paper" && humanChoice === "paper")
        {
            content.textContent = `It's a tie! ${humanChoice} and ${computerChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "paper" && humanChoice === "scissors")
        {
            humanScore += 1;
            content.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "scissors" && humanChoice === "rock")
        {
            humanScore += 1;
            content.textContent = `You win ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "scissors" && humanChoice === "paper")
        {
            computerScore += 1;
            content.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(content)
        }
        else if (computerChoice === "scissors" && humanChoice === "scissors")
        {
            content.textContent = `It's a tie! ${humanChoice} and ${computerChoice}`;
            resultsContainer.appendChild(content)
        }
    } 

    function displayScore()
    {
        scoreDisplay.textContent = `Computer Score: ${computerScore} Your Score: ${humanScore}`;
        resultsContainer.appendChild(scoreDisplay)
    }
    
    function declareWinner()
    {
        if (computerScore === 5)
        {
            winnerDisplay.textContent = 'The computer wins! Game Over!'
            resultsContainer.appendChild(winnerDisplay);
            computerScore = 0;
        }
        else if (humanScore === 5)
        {
            winnerDisplay.textContent = 'You win! Game Over!'
            resultsContainer.appendChild(winnerDisplay);
            humanScore = 0;
        }
    }
    
    rockBtn.addEventListener('click', () => 
    {
        computerChoice = getComputerChoice();
        playRound(computerChoice, "rock");
        displayScore();
        checkWinner();
    });

    paperBtn.addEventListener('click', () => 
    {
        computerChoice = getComputerChoice();
        playRound(computerChoice, "paper");
        displayScore();
        checkWinner();
    });

    scissorsBtn.addEventListener('click', () => 
    {
        computerChoice = getComputerChoice();
        playRound(computerChoice, "scissors");
        displayScore();
        checkWinner();
    });
}

playGame();