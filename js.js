let endPoint = "c46160aef01bb48121506497335c79ef"

let fetching = async () => {
    let res;
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${endPoint}`)
    if (data) {
        res = await data.json();
        console.log(res);
        document.getElementById("mainKarachiWeatherHeading").innerHTML = res.name
        document.getElementById("mainKarachiWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + res.weather[0].main;
        document.getElementById("mainKarachiWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((res.main.temp -273)) + '<sup>o</sup>';
        document.getElementById("mainKarachiWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + res.wind.speed;
        document.getElementById("mainKarachiWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + res.main.humidity 

    }

    let lahoreRes;
    let lahoreData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=${endPoint}`)
    if (lahoreData) {
        lahoreRes = await lahoreData.json();
        document.getElementById("mainLahoreWeatherHeading").innerHTML = lahoreRes.name
        document.getElementById("mainLahoreWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + lahoreRes.weather[0].main;
        document.getElementById("mainLahoreWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((lahoreRes.main.temp -273)) + '<sup>o</sup>';
        document.getElementById("mainLahoreWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + lahoreRes.wind.speed;
        document.getElementById("mainLahoreWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + lahoreRes.main.humidity 

    }

    let daharkiRes;
    let daharkiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=daharki&appid=${endPoint}`)
    if (daharkiData) {
        daharkiRes = await daharkiData.json();
        document.getElementById("mainDaharkiWeatherHeading").innerHTML = daharkiRes.name
        document.getElementById("mainDaharkiWeatherCondition").innerHTML = '<strong>Condition</strong> : ' + daharkiRes.weather[0].main;
        document.getElementById("mainDaharkiWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((daharkiRes.main.temp -273)) + '<sup>o</sup>';
        document.getElementById("mainDaharkiWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + daharkiRes.wind.speed;
        document.getElementById("mainDaharkiWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + daharkiRes.main.humidity 

    }
}

fetching()

document.getElementById('search').addEventListener('input', async function (event) {

})


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
        document.getElementById("mainDynamicWeatherTemperature").innerHTML = '<strong>Temperature</strong>  : ' + Math.floor((randomRes.main.temp -273)) + '<sup>o</sup>';
        document.getElementById("mainDynamicWeatherWind").innerHTML = '<strong>Wind Speed</strong> : ' + randomRes.wind.speed;
        document.getElementById("mainDynamicWeatherHumidity").innerHTML = ' <strong>Humidity</strong> : ' + randomRes.main.humidity 
    }else if(randomData.status == 404){
        document.getElementById('dynamicWeather').style.display = 'block'
        document.getElementById("mainDynamicWeatherHeading").innerHTML = 'oops! sorry city cant find';
        document.getElementById('dynamicWeatherBox')[0].style.height = '180px';

    }
}