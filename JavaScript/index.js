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
    let humanChoice = prompt("Pick between rock, paper or scissors")
    humanChoice = humanChoice.toLowerCase();

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
            console.log(`It's a tie! ${computerChoice} and ${humanChoice}`);
            
        }
        else if (computerChoice === "rock" && humanChoice === "paper")
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1; 
        }
        else if (computerChoice === "rock" && humanChoice === "scissors")
        {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
        else if (computerChoice === "paper" && humanChoice === "rock")
        {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
        else if (computerChoice === "paper" && humanChoice === "paper")
        {
            console.log(`It's a tie! ${humanChoice} and ${computerChoice}`);
        }
        else if (computerChoice === "paper" && humanChoice === "scissors")
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
        else if (computerChoice === "scissors" && humanChoice === "rock")
        {
            console.log(`You win ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper")
        {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
        else if (computerChoice === "scissors" && humanChoice === "scissors")
        {
            console.log(`It's a tie! ${humanChoice} and ${computerChoice}`);
        }
    } 

    // Play five round of game
    // for (let i = 1; i <= 5; i++)
    // {
    //     computerChoice = getComputerChoice();
    //     humanChoice = getHumanChoice();
    //     playRound(computerChoice, humanChoice);
    // }

    // Display total score
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);

    // Declare Winner
    if (computerScore > humanScore)
    {
        console.log("The computer wins!")
    }
    else if (computerScore < humanScore)
    {
        console.log("You win!");
    }
    else 
    {
        console.log("It's a tie!")
    }

    console.log("Game Over!")
}

playGame();