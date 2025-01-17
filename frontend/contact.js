async function load () {
    let local =await localStorage.getItem("username");
    if(local){
        document.getElementById('contactLoginButton1').style.display = 'none'
        document.getElementById('contactLoginButton2').style.display = 'none'
        document.getElementById('contactRegisterButton1').style.display = 'none'
        document.getElementById('contactRegisterButton2').style.display = 'none'
        document.getElementById('contactLogoutButton1').style.display = 'block'
        document.getElementById('contactLogoutButton2').style.display='block';
    }
}

load()

function samePage(){
    window.location.href = "https://weather-rouge-two.vercel.app/contact.html"
}

function logout() {
    localStorage.clear();
    document.getElementById('contactLogoutButton1').style.display = 'none'
    document.getElementById('contactLogoutButton2').style.display='none';
    document.getElementById('contactLoginButton1').style.display = 'block'
    document.getElementById('contactLoginButton2').style.display = 'block'
    document.getElementById('contactRegisterButton1').style.display = 'block'
    document.getElementById('contactRegisterButton2').style.display = 'block'
}



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