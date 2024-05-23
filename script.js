const ElYourScore = document.getElementById("yourScore")
const ElMachineScore = document.getElementById("scoreMachine")
const ElResult = document.getElementById("result")
const ElresetBtn = document.getElementById("resetBtn")

let yourScore = 0
let machineScore = 0

const yourChoice = (humanChoice) => {
    plays(humanChoice, machineChoise())
}

const machineChoise = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    const randomChoise = choices[randomNumber]
    return randomChoise
}

const plays = (human, machine) => {
    if (human === machine) {
        ElResult.innerHTML = "Empate!"
    } else if ((human === "rock" && machine === "scissors") || (human === "scissors" && machine === "paper") || (human === "paper" && machine === "rock")) {
        yourScore++
        ElYourScore.innerHTML = yourScore
        ElResult.innerHTML = "Você Venceu!"
    } else {
        machineScore++
        ElMachineScore.innerHTML = machineScore
        ElResult.innerHTML = "Ahh, Você Perdeu!"
    }

    if (yourScore >= 10) {
        ElResult.innerHTML = "Parabéns! Você ganhou o jogo"
        ElYourScore.style.display = "none"
        ElMachineScore.style.display = "none"
    }
    if (machineScore >= 10) {
        ElResult.innerHTML = "Que azar!!! Você perdeu, tente denovo!"
        ElYourScore.style.display = "none"
        ElMachineScore.style.display = "none"
    }

}

const reset = () => {
    yourScore = 0
    machineScore = 0
    ElYourScore.innerHTML = "0"
    ElResult.innerHTML = "-"
    ElMachineScore.innerHTML = "0"
    ElYourScore.style.display = "block"
    ElMachineScore.style.display = "block"
}

ElresetBtn.addEventListener("click", reset)