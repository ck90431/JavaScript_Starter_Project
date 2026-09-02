const apiKey = "5b43ed190074084f1f671f08c6ea4506";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon")

async function weatherCheck(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";

    document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/hr";


if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
}

if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
}

if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
}   

if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
}

if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
}

}
searchBtn.addEventListener("click", () => {
    weatherCheck(searchBox.value);
});


