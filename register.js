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

    const url = "http://localhost:8080/register";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "username" : usernameValue,
            "password" : passwordValue
        }
    })

    console.log(response.status)
    
    location.hash = "/login"
}