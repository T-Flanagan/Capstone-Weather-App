function fetchWeather(event) {
    event.preventDefault(); 
    const cityName = event.target.elements["inputcity"].value.trim();
    const apiKey = "e5efa77f12dccd14eeaec7efa7d09f0e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].main;
            const temperature = Math.floor(data.main.temp - 273.15);
            document.getElementById("weather-info").innerHTML = `
                <p>City: ${cityName}</p>
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("weather-info").innerHTML = "Error: City not found!";
        });
}

