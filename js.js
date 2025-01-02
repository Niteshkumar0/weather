let endPoint = "c46160aef01bb48121506497335c79ef"

let fetching = async () => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${endPoint}`)
    if (data) {
        // let res = await data;
        console.log(data)
    }
}

fetching()


