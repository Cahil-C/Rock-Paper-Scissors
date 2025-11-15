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
            return "scissor";
    }
}

// get the human choice (Assuming the user enter a valid choice)
function getHumanChoice ()
{
    let humanChoice = prompt("Pick between rock, paper or scissor")
    humanChoice = humanChoice.toLowerCase();

    return humanChoice
}

function playGame ()
{
    console.log("Let's play rock, paper, scissor")

    // Keep track of players score (computer and the human)
    let computerScore = 0;
    let humanScore = 0;

    // Single Round
    function playRound (humanChoice, computerChoice)
    {

        if (computerChoice === "rock" && humanChoice === "rock")
        {
            console.log(`It's a tie! ${computerChoice} and ${humanChoice}`);
            computerScore += 1;
            humanScore += 1; 
        }
        else if (computerChoice === "rock" && humanChoice === "paper")
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1; 
        }
        else if (computerChoice === "rock" && humanChoice === "scissor")
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
            console.log(`It's a tie ${humanChoice} and ${computerChoice}`);
            computerScore += 1;
            humanScore += 1;
        }
        else if (computerChoice === "paper" && humanChoice === "scissor")
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
        else if (computerChoice === "scissor" && humanChoice === "rock")
        {
            console.log(`You win ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
        else if (computerChoice === "scissor" && humanChoice === "paper")
        {
            console.log(`You lose ${computerChoice} and ${humanChoice}`);
            computerScore += 1;
        }
        else if (computerChoice === "scissor" && humanChoice === "scissor")
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            computerScore += 1;
            humanChoice += 1;
        }
    } 

    playRound("rock", "paper");
}

// 
playGame()