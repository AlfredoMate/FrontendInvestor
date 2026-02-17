import { renderLogin } from './login.js';
import { renderDashboard } from './dashboard.js';
import { renderRegister } from './register.js';

const app = document.getElementById("app");
function router() {

    console.log(location.hash)
    const route = location.hash.replace("#", "") || "/login";
    console.log(route)
    if (route === "/login") {
        renderLogin();
    }
    if (route === "/dashboard") {
        renderDashboard();
    }
    if (route === "/register") {
        renderRegister();
    }
        
    
    
}
window.addEventListener("load", router)
window.addEventListener("hashchange", router)

