function renderLogin() {
    app.innerHTML = `
    <h2>Login</h2>
    <input id="username" placeholder="Username" />
    <input id="password" placeholder="password" />

    <button id="loginBtn">Login</button>
    `;
    location.hash = ("/login")

    const buttonLogin = document.getElementById("loginBtn");
    buttonLogin.addEventListener('click', login)
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      headers: { username, password }
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    if (data) {
        location.hash = ("/dashboard")
    }

    // save token (or rely on cookie)
    localStorage.setItem("token", data.token);

    //location.hash = "/dashboard";
  }
  catch (err) {
    document.getElementById("error").textContent = err.message;
  }
}
