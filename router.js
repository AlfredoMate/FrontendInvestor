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
        
    
    
}
window.addEventListener("load", router)
window.addEventListener("hashchange", router)

