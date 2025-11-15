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
    const humanChoice = prompt("Pick between rock, paper or scissor")

    return humanChoice
}

// Keep track of players score (computer and the human)
let computerScore = 0;
let humanScore = 0;