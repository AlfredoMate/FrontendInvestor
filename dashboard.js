
function renderDashboard () {
    location.hash = "/dashboard"
    app.innerHTML = 
    `
    <h2>Dashboard</h2>
    <form>
        <input class="userInput" id="userInput" type="text" placeholder="Enter ticker name">
        <button class="myButton" type="button" id="submitButton">Submit </button>
        <p id="output"></p>   
    </form>`
    const button = document.getElementById("submitButton");
    const userInput = document.getElementById("userInput");
    const output = document.getElementById("output");

button.addEventListener('click', () => {
    const value = userInput.value;
    if (!value) {
        output.textContent = "Please enter a ticker name!";
        return;
    }
    fetch(`http://localhost:8080/data?ticker=${value}`, {
        credentials: "include"
    })
    .then(async res =>  {
        const currentUserName = res.headers.get("Username");
        const data = await res.json();
        return ({ data, currentUserName });
    })
    .then(({data, currentUserName}) => {
        output.textContent = `User: ${currentUserName}\nData: ${JSON.stringify(data)}`;
    })
    .catch(err => {
        output.textContent = `Error: ${err.message}`
    })
})
}




