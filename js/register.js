import { CONFIG } from "./config";

function renderRegister () {

    
 
    app.replaceChildren();
    const template = document.getElementById("register-template")
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);

    const usernameInput = document.getElementById("registerUsername");
    const passwordInput = document.getElementById("registerPassword");
    const registerButton = document.getElementById("registerButton");

    registerButton.addEventListener("click", () => sendRegisterRequest(usernameInput.value, passwordInput.value))
}

async function sendRegisterRequest(usernameValue, passwordValue) {

    const url = CONFIG.API_URL + "/register";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "username" : usernameValue,
            "password" : passwordValue
        }
    })
    if (response.status === 200) {
        location.hash = "/login"
    } else {
        displayErrorMessage(response.status, usernameValue);
    }
    
    
}

function displayErrorMessage(status, username) {
    const errorMessageToDisplay = document.getElementById("registerError");

    if (status === 409) {
        errorMessageToDisplay.textContent = `${username} alreay exists.`
    }
    

}