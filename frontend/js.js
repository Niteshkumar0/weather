
let endPoint = "c46160aef01bb48121506497335c79ef"


let fetching = async () => {
    let res;
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${endPoint}`)
    if (data) {
        res = await data.json();
        document.getElementById("mainKarachiWeatherHeading").innerHTML = res.name
        document.getElementById("mainKarachiWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + res.weather[0].main;
        document.getElementById("mainKarachiWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((res.main.temp -273)) + '<sup>o</sup>' + 'C';
        document.getElementById("mainKarachiWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + res.wind.speed;
        document.getElementById("mainKarachiWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + res.main.humidity 

    }

    let lahoreRes;
    let lahoreData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=${endPoint}`)
    if (lahoreData) {
        lahoreRes = await lahoreData.json();
        document.getElementById("mainLahoreWeatherHeading").innerHTML = lahoreRes.name
        document.getElementById("mainLahoreWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + lahoreRes.weather[0].main;
        document.getElementById("mainLahoreWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((lahoreRes.main.temp -273)) + '<sup>o</sup>' + 'C';
        document.getElementById("mainLahoreWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + lahoreRes.wind.speed;
        document.getElementById("mainLahoreWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + lahoreRes.main.humidity 

    }

    let daharkiRes;
    let daharkiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=daharki&appid=${endPoint}`)
    if (daharkiData) {
        daharkiRes = await daharkiData.json();
        document.getElementById("mainDaharkiWeatherHeading").innerHTML = daharkiRes.name
        document.getElementById("mainDaharkiWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + daharkiRes.weather[0].main;
        document.getElementById("mainDaharkiWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((daharkiRes.main.temp -273)) + '<sup>o</sup>' + 'C';
        document.getElementById("mainDaharkiWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + daharkiRes.wind.speed;
        document.getElementById("mainDaharkiWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + daharkiRes.main.humidity 

    }

    let local =await localStorage.getItem("username");
    if(local){
    document.getElementById('mainLoginButton1').style.display = 'none'
    document.getElementById('mainLoginButton2').style.display = 'none'
    document.getElementById('mainRegisterButton1').style.display = 'none'
    document.getElementById('mainRegisterButton2').style.display = 'none'
    document.getElementById('mainLogoutButton1').style.display = 'block'
    document.getElementById('mainLogoutButton2').style.display='block';
}
}

function logout() {
    localStorage.clear();
    document.getElementById('mainLogoutButton1').style.display = 'none'
    document.getElementById('mainLogoutButton2').style.display='none';
    document.getElementById('mainLoginButton1').style.display = 'block'
    document.getElementById('mainLoginButton2').style.display = 'block'
    document.getElementById('mainRegisterButton1').style.display = 'block'
    document.getElementById('mainRegisterButton2').style.display = 'block'
}

async function dynamic(event) {
    
    let city = document.getElementById('search').value;
    let removeWhiteSpace = city.trim();

    if (removeWhiteSpace == 0) {
        return false;
    }
    let randomRes;
    let randomData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${removeWhiteSpace}&appid=${endPoint}`)
    if (randomData.status == 200) {
        randomRes = await randomData.json();
        console.log(randomData);
        document.getElementById('dynamicWeather').style.display = 'block'
        // document.getElementById('dynamicWeatherBox')[0].style.height = '220px';
        document.getElementById("mainDynamicWeatherHeading").innerHTML = randomRes.name
        document.getElementById("mainDynamicWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + randomRes.weather[0].main;
        document.getElementById("mainDynamicWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((randomRes.main.temp -273)) + '<sup>o</sup>' + 'C';
        document.getElementById("mainDynamicWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + randomRes.wind.speed;
        document.getElementById("mainDynamicWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + randomRes.main.humidity 
    }else if(randomData.status == 404){
        document.getElementById('dynamicWeather').style.display = 'none';
        document.getElementById('wrongCity').style.display = 'block';
    }
}

fetching()


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


//BACKEND START HERE 

async function sendRegisterData(){
    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;

    let user = {
        username,
        email,
        password,confirmPassword
    }

    try {
        let res = await fetch('http://localhost:3001/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
        })
       
        if(res.ok){
            let data = await res.json()
            alert(data.message)
            window.location.href  = "http://127.0.0.1:5500/login.html"
            
        }else{
            let error =  await res.text()
            alert(error)
        }

    } catch (error) {
        console.log(error)
    }
}


async function LoginData() {
    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    let user = {
        username,
        email,
        password
    }


    // console.log(user)

    try {
        let res = await fetch('http://localhost:3001/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
        })
       
        if(res.ok){
            let data = await res.json()
            alert(data.message)
            localStorage.setItem('username',data.name)
            window.location.href  = "http://127.0.0.1:5500/./index.html"
            
        }else{
            let error =  await res.text()
            alert(error)
        }

    } catch (error) {
        console.log(error)
    }
}