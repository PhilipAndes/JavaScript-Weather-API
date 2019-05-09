class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.feelsLike = document.getElementById('w-feels-like');
        this.humidity= document.getElementById('w-humidity');
        this.pressure = document.querySelector('#w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${weather.main.temp}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.feelsLike.textContent = `Feels Like: ${weather.weather[0].description}`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} ATM`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}