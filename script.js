

// http://api.weatherapi.com/v1/current.json?key=d00946e814a4480e8c020844232509&q=London




async function getWeather(searchInput) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d00946e814a4480e8c020844232509&q=${searchInput}`)
    const weatherData = await response.json();

    const data = {
        "city" : weatherData.location.name,
        "currentTemp" : weatherData.current.temp_c,
        "humidity" : weatherData.current.humidity,
        "condition" : weatherData.current.condition.text,
        "windspeed" : weatherData.current.wind_kph,
        "iconsrc" : weatherData.current.condition.icon
    }
    console.log(data);

    document.querySelector(".city").textContent = `Weather in ${data.city}`
    document.querySelector(".temp").textContent = `${data.currentTemp}°C`
    document.querySelector(".description").textContent = `${data.condition}`
    document.querySelector(".icon").src = data.iconsrc
    document.querySelector(".humidity").textContent = `Humidity: ${data.humidity}%`
    document.querySelector(".wind").textContent = `Wind Speed: ${data.windspeed}kph`
    
    console.log("object");
    document.querySelector(".card-content").classList.remove("loading")
}


const searchBar = document.querySelector(".search-bar")
const searchButton = document.querySelector("button")

searchButton.addEventListener("click", ()=> {
    getWeather(searchBar.value)
})

searchBar.addEventListener("keypress", (e)=> {
    if (e.code === 'Enter') {
        getWeather(searchBar.value)
    }

})


getWeather("melbourne")

