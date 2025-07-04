let userScore = 0
let compScore = 0

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector(".msg")
let Score_Comp = document.querySelector("#comp-score")
let Score_User = document.querySelector("#user-score")

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")

        playgame(userChoice)
    })
})

function generateChoice() {
    const Choose = ["rock", "paper", "scissor"]
    let index = Math.floor(Math.random() * 3)
    return Choose[index]
}

function playgame(userChoice) {

    let compChoice = generateChoice();


    if (compChoice === userChoice) {

        msg.innerText = "Game is draw"
        msg.style.backgroundColor = "grey"

    }
    else {
        let userwin = true
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            userwin = compChoice === "rock" ? true : false
        }
        else if (userChoice === "scissor") {
            userwin = compChoice === "rock" ? false : true
        }
        showWinner(userwin, compChoice, userChoice)
    }
}

const showWinner = (userwin, compChoice, userChoice) => {
    if (userwin) {
        userScore++
        Score_User.innerText = userScore

        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"

    } else {
        compScore++
        Score_Comp.innerText = compScore

        msg.innerText = `you Lose!  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"


    }
}
