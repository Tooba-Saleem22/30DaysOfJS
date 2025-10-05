const apiKey = "e710e827216ffc26ce7719554bd31d7a";

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(data => {
      if (data.cod === "404" || !data.main) {
        document.getElementById('weatherResult').innerHTML = "City not found!";
        return;
      }

      const temperature = data.main.temp;
      const weather = data.weather[0].description;
      const humidity = data.main.humidity;

      document.getElementById('weatherResult').innerHTML = `
        <div class="current-weather">
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Weather:</strong> ${weather}</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
        </div>
      `;

      // Forecast (dummy data for 3 days since free API doesn’t support detailed forecast)
      document.getElementById('forecast').innerHTML = `
        <div class="forecast-box">
          <p><strong>Tomorrow</strong></p>
          <p>🌤️ 29°C</p>
          <p>Humidity: 60%</p>
        </div>
        <div class="forecast-box">
          <p><strong>Day After</strong></p>
          <p>⛅ 27°C</p>
          <p>Humidity: 55%</p>
        </div>
        <div class="forecast-box">
          <p><strong>3rd Day</strong></p>
          <p>🌦️ 26°C</p>
          <p>Humidity: 70%</p>
        </div>
      `;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById('weatherResult').innerHTML = "Error fetching weather!";
    });
}
