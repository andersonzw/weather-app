

// http://api.weatherapi.com/v1/current.json?key=d00946e814a4480e8c020844232509&q=London

const text = document.querySelector(".display")

async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=d00946e814a4480e8c020844232509&q=London')
    const weatherData = await response.json();
    console.log(response);
    console.log({weatherData});
    console.log(weatherData.current.feelslike_c);
}

getWeather()