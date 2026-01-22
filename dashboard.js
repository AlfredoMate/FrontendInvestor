
function renderDashboard () {
    location.hash = "/dashboard"

    app.replaceChildren();
    const template = document.getElementById("dashboard-template");
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);

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




