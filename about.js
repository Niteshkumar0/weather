async function load () {
    let local =await localStorage.getItem("username");
    if(local){
        document.getElementById('aboutLoginButton1').style.display = 'none'
        document.getElementById('aboutLoginButton2').style.display = 'none'
        document.getElementById('aboutRegisterButton1').style.display = 'none'
        document.getElementById('aboutRegisterButton2').style.display = 'none'
        document.getElementById('aboutLogoutButton1').style.display = 'block'
        document.getElementById('aboutLogoutButton2').style.display='block';
    }
}

load()


function logout() {
    localStorage.clear();
    document.getElementById('aboutLogoutButton1').style.display = 'none'
    document.getElementById('aboutLogoutButton2').style.display='none';
    document.getElementById('aboutLoginButton1').style.display = 'block'
    document.getElementById('aboutLoginButton2').style.display = 'block'
    document.getElementById('aboutRegisterButton1').style.display = 'block'
    document.getElementById('aboutRegisterButton2').style.display = 'block'
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