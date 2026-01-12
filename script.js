const button = document.getElementById("submitButton");
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

button.addEventListener('click', () => {
    const value = userInput.value;
    if (!value) {
        output.textContent = "Please enter a ticker name!";
        return;
    }
    fetch(`http://localhost:8080/data?ticker=${value}`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        output.textContent = JSON.stringify(json)
    })
    .catch(err => {
        output.textContent = `Error: ${err.message}`
    })
})