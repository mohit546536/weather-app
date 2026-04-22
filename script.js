async function getWeather() {
    let city = document.getElementById("city").value.trim();
    let result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "⚠️ Please enter a city name";
        return;
    }

    let apiKey = "cdbdea2ca54f24d5be80cd362130c9e7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    result.innerHTML = "⏳ Loading...";

    try {
        let response = await fetch(url);
        let data = await response.json();  // 👈 direct parse

        if (data.cod == 200) {
            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡 Temp: ${data.main.temp}°C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            result.innerHTML = "❌ City not found or API issue";
        }

    } catch (error) {
        result.innerHTML = "⚠️ Error fetching data!";
        console.error(error);
    }
}
