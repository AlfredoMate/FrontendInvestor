function renderLogin() {
   
    location.hash = ("/login")
    app.replaceChildren();
    
    const template = document.getElementById("login-template");
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);

    const buttonLogin = document.getElementById("loginBtn");
    buttonLogin.addEventListener("click", login);

    const buttonRegisterFromLogin = document.getElementById("registerFromLogin");
    buttonRegisterFromLogin.addEventListener("click", goToRegister);
    
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

 
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      headers: { username, password }
    });

    if (!response.ok) {
      displayErrorMessage(response.status, username);
    }

    const data = await response.json();
    if (data) {
        location.hash = ("/dashboard")
    }

    // save token (or rely on cookie)
    localStorage.setItem("token", data.token);

    //location.hash = "/dashboard";
  
  
}

function goToRegister () {
  location.hash = ("/register");
}

function displayErrorMessage(errorStatusCode, username) {

  const errorMessageDisplayed = document.getElementById("loginErrorMessage");
  if (errorStatusCode === 404) {
    errorMessageDisplayed.textContent = `User ${username} doesn't exist!`
  }
  if (errorStatusCode === 401) {
    errorMessageDisplayed.textContent = `Incorrect password for unsername ${username}`
  }
}
