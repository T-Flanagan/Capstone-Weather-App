function fetchWeather(){
    alert("test") 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Raleigh,us&APPID=e5efa77f12dccd14eeaec7efa7d09f0e`)
    .then(response => response.json())
    .then(results => {
        console.log(results)
    })
}

