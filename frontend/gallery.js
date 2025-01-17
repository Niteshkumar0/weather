async function load () {
    let local =await localStorage.getItem("username");
    if(local){
        document.getElementById('galleryLoginButton1').style.display = 'none'
        document.getElementById('galleryLoginButton2').style.display = 'none'
        document.getElementById('galleryRegisterButton1').style.display = 'none'
        document.getElementById('galleryRegisterButton2').style.display = 'none'
        document.getElementById('galleryLogoutButton1').style.display = 'block'
        document.getElementById('galleryLogoutButton2').style.display='block';
    }
}

load()


function logout() {
    localStorage.clear();
    document.getElementById('galleryLogoutButton1').style.display = 'none'
    document.getElementById('galleryLogoutButton2').style.display='none';
    document.getElementById('galleryLoginButton1').style.display = 'block'
    document.getElementByxId('galleryLoginButton2').style.display = 'block'
    document.getElementById('galleryRegisterButton1').style.display = 'block'
    document.getElementById('galleryRegisterButton2').style.display = 'block'
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