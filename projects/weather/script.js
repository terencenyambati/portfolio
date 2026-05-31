const apiKey = "8d1760b8344efd76977948e8fc94da58";

document.getElementById("weatherResult").innerHTML =
    "<p>Loading weather...</p>";

function getWeather() {

    let city = document.getElementById("cityInput").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML =
                    "<p>City not found</p>";
                return;
            }

            let temp = data.main.temp;
            let condition = data.weather[0].description;
            let name = data.name;

           const icon = data.weather[0].icon;

    document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>

        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">

        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>

`;
        })

        .catch(err => {
    document.getElementById("weatherResult").innerHTML = `
        <p style="color:red;">Unable to fetch weather data</p>
    `;
});

}