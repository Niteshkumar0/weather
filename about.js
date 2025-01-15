async function load() {
    let local = await localStorage.getItem("username");
    // Check if local exists and is non-empty
    if (local && local.trim() !== "") {
        document.getElementById('aboutLoginButton1').style.display = 'none';
        document.getElementById('aboutLoginButton2').style.display = 'none';
        document.getElementById('aboutRegisterButton1').style.display = 'none';
        document.getElementById('aboutRegisterButton2').style.display = 'none';
        document.getElementById('aboutLogoutButton1').style.display = 'block';
        document.getElementById('aboutLogoutButton2').style.display = 'block';
    } else {
        // Show login and register buttons if no username is found
        document.getElementById('aboutLoginButton1').style.display = 'block';
        document.getElementById('aboutLoginButton2').style.display = 'block';
        document.getElementById('aboutRegisterButton1').style.display = 'block';
        document.getElementById('aboutRegisterButton2').style.display = 'block';
        document.getElementById('aboutLogoutButton1').style.display = 'none';
        document.getElementById('aboutLogoutButton2').style.display = 'none';
    }
}

load();

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