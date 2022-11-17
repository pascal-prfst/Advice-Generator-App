const diceButton = document.getElementById("dice-icon")
const adviceQuote = document.getElementById("advice")
const adviceNumber = document.getElementById("advice-number")

const urlApi = "https://api.adviceslip.com/advice";

diceButton.addEventListener("click", () => {
    fetchAdvice()
})

async function fetchAdvice() {
    const response = await fetch(urlApi)
    const data = await response.json()
    const {id, advice} = data.slip
    console.log("clicked")
    adviceNumber.innerHTML = id
    adviceQuote.innerHTML = `"${advice}"`
}

