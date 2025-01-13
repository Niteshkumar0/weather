async function load () {
    let local =await localStorage.getItem("username");
    if(!local){
        alert("first login then visit website")
        window.location.href = "http://127.0.0.1:5500/weather/main.html"
    }

}

load()


function showHamburgerNavbar(){
    document.getElementById('hamburgerNavbar').style.display = 'block';
    document.getElementById('hambugerCrossImage').style.display = 'block'
    document.getElementById('hambugerImage').style.display = "none";

}

function hideHamburgerNavbar(){
    document.getElementById('hamburgerNavbar').style.display = "none";
    document.getElementById('hambugerCrossImage').style.display = 'none'
    document.getElementById('hambugerImage').style.display = 'block';
}