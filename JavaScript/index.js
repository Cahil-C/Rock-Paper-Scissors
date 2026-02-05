let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let resultsContainer = document.querySelector(".results-container");
let content = document.createElement("div");

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

// get the human choice (Assuming the user enter a valid choice)
function getHumanChoice ()
{
    // let humanChoice = prompt("Pick between rock, paper or scissors")
    // humanChoice = humanChoice.toLowerCase();

    return humanChoice
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

    computerChoice = getComputerChoice();
    rockBtn.addEventListener('click', () => 
    {
        playRound(computerChoice, "rock");
    });

    paperBtn.addEventListener('click', () => 
    {
        playRound(computerChoice, "paper");
    });
    
    scissorsBtn.addEventListener('click', () => 
    {
        playRound(computerChoice, "scissors");
    });

    // Display total score
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);

    // Declare Winner
    // if (computerScore > humanScore)
    // {
    //     console.log("The computer wins!")
    // }
    // else if (computerScore < humanScore)
    // {
    //     console.log("You win!");
    // }
    // else 
    // {
    //     console.log("It's a tie!")
    // }

    // console.log("Game Over!")
}

playGame();