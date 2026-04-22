async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "cdbdea2ca54f24d5be80cd362130c9e7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    let result = document.getElementById("result");

    if (data.cod == 200) {
        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temp: ${data.main.temp}°C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } else {
        result.innerHTML = "❌ City not found";
    }
}
function clearInput() {
    let input = document.getElementById("city");
    let result = document.getElementById("result");

    input.value = "";
    result.innerHTML = "<p>Enter a city to get weather</p>";
}
